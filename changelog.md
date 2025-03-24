# changelog

## 1.0

### 1.0

-   Various bugfixes

### 1.0rc1

-   Monocle layout
-   Pinned windows fix
-   Fixed settings dialog and setting application
-   Support relative sizing as determined by engines
-   Add relative sizing support to half, btree and three column engines
-   Add ability for engines to save special configs in the settings saver
-   Added setting for auto saving configs when tiles are edited
-   Fixed tile dragging
-   Update docs

### 1.0b2

-   Dragging tile functionality temporarily suspended due to kwin bugs
-   Better fullscreen/max/min support
-   Fixed some other strange untile/tile
-   Made resizing shortcuts a bit more useable
-   Added shortcuts for each layout

### 1.0b1

-   Update to Plasma 6
-   Internal engine rewrite
-   Separate engine API
-   Use object-oriented paradigm instead of event-oriented
-   Use external kwin-api package
-   Stability improvements
-   Better multi-screen support
-   Better minimum size and resizing support

## 0.6

### 0.6.0

-   Sort of support minimum window sizes
-   Tile resizing done in pixels instead of relatives
-   Added live settings configuration per desktop
-   Added insertion points to Half and ThreeColumn
-   Added DBus interface to persist some settings across logouts
-   Fixed bug in retiling with several screens
-   Added rotation option to orient most layouts on their sides
-   Added reset option to DBus to reset settings

## 0.5

### 0.5.2

-   Fixed QTimer undefined bug
-   Added fullscreen handler on a per-window basis
-   Website redesign from @HimDek
-   Added rudimentary monocle layout
-   Refactored some stuff to use more per-window signals instead of global kwin ones
-   Basic support for quick tile shortcuts and quick tiling
-   Windows return to roughly where they were previously when tiling and retiling
-   Improved support for quick tile shortcuts
-   Basic unfullscreen when something is tiled (doesn't really work, kwin inconsistency?)

### 0.5.1

-   Added an optional direction parameter to `TilingEngine.putClientInTile` and most descending classes
-   Added code to set geometry of windows when not active to preserve their shape
-   Added directional placement when dragging windows for more dragging predictability
-   Added directional placement when using shortcuts for more predictability
-   Fixed rare issue with TypeScript not allowing no parentheses `new Array<T>` statements
-   Rewrote much of the project internals around using QML as the main script type
-   Added new popup for when the tiling engine is switched
-   Use esbuild instead of tsc to compile and added typescript to npm dependencies
-   Fix up some issues with overextending tiling when resizing with shortcuts
-   Added section to FAQ about moving windows while keeping them tiled
-   Replaced limitations section of readme with info about X11
-   Insert starting on right with ThreeColumn
-   Added partial side insertion to ThreeColumn and Half to get around missing columns
-   Added private to package.json
-   Set fallback tiling engine to KWin
