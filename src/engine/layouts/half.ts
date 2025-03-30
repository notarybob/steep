// half.ts - Tiling engine for the half/split layout

import {
    Tile,
    Client,
    TilingEngine,
    EngineCapability,
    EngineSettings,
} from "../engine";
import { Direction } from "../../util/geometry";
import { InsertionPoint } from "../../util/config";

class ClientBox {
    client: Client;

    constructor(client: Client) {
        this.client = client;
    }
}

class BoxIndex {
    index: number;
    left: boolean = false;
    right: boolean = false;
    box: ClientBox;

    constructor(engine: HalfEngine, client: Client) {
        for (let i = 0; i < engine.left.length; i += 1) {
            if (engine.left[i].client == client) {
                this.index = i;
                this.left = true;
                this.box = engine.left[i];
                return;
            }
        }
        for (let i = 0; i < engine.right.length; i += 1) {
            if (engine.right[i].client == client) {
                this.index = i;
                this.right = true;
                this.box = engine.right[i];
                return;
            }
        }
        throw new Error("Couldn't find box");
    }
}

interface HalfEngineSettings extends EngineSettings {
    middleSplit: number;
}

export default class HalfEngine extends TilingEngine {
    engineCapability = EngineCapability.TranslateRotation;
    tileMap: Map<Tile, ClientBox> = new Map();
    left: ClientBox[] = [];
    right: ClientBox[] = [];
    // the ratio of left side to total space
    middleSplit: number = 0.5;

    get engineSettings(): HalfEngineSettings {
        return {
            middleSplit: this.middleSplit,
        };
    }

    set engineSettings(settings: HalfEngineSettings) {
        this.middleSplit = settings.middleSplit ?? 0.5;
    }

    buildLayout() {
        // set original tile direction based on rotating layout or not
        this.rootTile = new Tile();
        this.rootTile.layoutDirection = this.config.rotateLayout ? 2 : 1;
        if (this.left.length == 0 && this.right.length == 0) {
            // empty root tile
            return;
        } else if (this.left.length == 0 && this.right.length > 0) {
            for (var box of this.right) {
                var tile = this.rootTile.addChild();
                tile.client = box.client;
                this.tileMap.set(tile, box);
            }
        } else if (this.left.length > 0 && this.right.length == 0) {
            for (var box of this.left) {
                var tile = this.rootTile.addChild();
                tile.client = box.client;
                this.tileMap.set(tile, box);
            }
        } else {
            this.rootTile.split();
            var left = this.rootTile.tiles[0];
            var right = this.rootTile.tiles[1];

            left.relativeSize = this.middleSplit;
            right.relativeSize = 1 - this.middleSplit;
            for (var box of this.left) {
                var tile = left.addChild();
                tile.client = box.client;
                this.tileMap.set(tile, box);
            }
            for (var box of this.right) {
                var tile = right.addChild();
                tile.client = box.client;
                this.tileMap.set(tile, box);
            }
        }
    }

    addClient(client: Client) {
        if (this.config.insertionPoint == InsertionPoint.Left) {
            if (this.right.length == 0) {
                this.right.push(new ClientBox(client));
            } else {
                this.left.push(new ClientBox(client));
            }
        } else {
            if (this.left.length == 0) {
                this.left.push(new ClientBox(client));
            } else {
                this.right.push(new ClientBox(client));
            }
        }
    }

    removeClient(client: Client) {
        let box: BoxIndex;
        try {
            box = new BoxIndex(this, client);
        } catch (e) {
            throw e;
        }
        if (box.right) {
            this.right.splice(box.index, 1);
            if (this.right.length == 0 && this.left.length > 1) {
                this.right.push(this.left.splice(0, 1)[0]);
            }
        } else {
            this.left.splice(box.index, 1);
            if (this.left.length == 0 && this.right.length > 1) {
                this.left.push(this.right.splice(0, 1)[0]);
            }
        }
    }

    // default to inserting below
    putClientInTile(
        client: Client,
        tile: Tile,
        direction: Direction = Direction.Vertical,
    ) {
        var clientBox = new ClientBox(client);
        let targetBox: BoxIndex;
        var box = this.tileMap.get(tile);
        if (box == undefined) {
            this.addClient(client);
            return;
        }
        targetBox = new BoxIndex(this, box.client);

        var targetArr = targetBox.left ? this.left : this.right;
        if (direction & Direction.Up) {
            targetArr.splice(targetBox.index, 0, clientBox);
        } else {
            targetArr.splice(targetBox.index + 1, 0, clientBox);
        }
    }

    regenerateLayout(): void {
        if (this.rootTile.tiles.length == 2) {
            this.middleSplit = this.rootTile.tiles[0].relativeSize;
        }
    }
}
