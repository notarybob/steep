<div align="center">

# polonium

An autotile manager for Plasma 6.

An (unofficial) spiritual successor to [Bismuth](https://github.com/Bismuth-Forge/bismuth) built on KWin 6.

The descendant of [autotile](https://github.com/zeroxoneafour/kwin-autotile).

![hot icon](https://raw.githubusercontent.com/zeroxoneafour/polonium/master/docs/logo.svg)

[![KDE Store](https://img.shields.io/badge/KDE%20Store-Install-blue?style=for-the-badge&logo=KDE&logoColor=white&labelColor=blue)](https://store.kde.org/p/2140417)
[![GitHub](https://img.shields.io/badge/GitHub-Source%20Code-grey?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=grey)](https://github.com/zeroxoneafour/polonium)

[![wayland: supported](https://img.shields.io/badge/Wayland-Ready-blue?logo=kde)](https://community.kde.org/KWin/Wayland)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

</div>

## features

-   Works in Wayland Plasma 6.0.4 and up
-   Custom moddable tiling engine backend
-   Edit tile sizes with the integrated KWin GUI
-   Move and tile windows with your mouse and keyboard
-   Set layouts independently of desktop, activity, and screen
-   [DBus integration](https://github.com/zeroxoneafour/dbus-saver) to save layouts and configurations after logging out

## X11

X11 has been briefly tested but is not supported. If you encounter an issue running the script on X11, make sure it is reproducible in Wayland before submitting a bug report.

## building

Requires `npm` and `kpackagetool6`

Commands -

-   Build/Install/Clean - `make`
-   Build - `make build`
-   Install/Reinstall - `make install`
-   Clean build - `make clean`
-   Clean build and target - `make cleanall`

## license

Majority of this project is [MIT licensed](https://github.com/zeroxoneafour/polonium/blob/master/license.txt), please bum my code if you can use to make something better. Make sure to give credit though!

## name

Came from a comment on my old script, you can find the script and comment [here](https://store.kde.org/p/2003956)
