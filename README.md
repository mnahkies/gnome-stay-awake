# gnome-stay-awake
[![npm](https://img.shields.io/npm/v/gnome-stay-awake.svg)](https://www.npmjs.com/package/gnome-stay-awake)

This is a simple cli application for Gnome desktop Linux environments that disables 
the lock screen and screen off/idle timer whilst running.

On exit the original settings are restored.

**Example use cases:**
- Viewing a recipe whilst cooking
- Keeping dashboards / charts visible in the background, eg: stock tickers, grafana, etc

## Requirements
- NodeJS / npm
- A Gnome desktop environment

## Usage
Either install the package globally, or execute using `npx`.

### Using npx

```shell
$ npx gnome-stay-awake
```

### Global Installation
(note: you'll need to ensure that `echo $(npm config get prefix)/bin` is on your `$PATH`)

```shell
$ npm i -g gnome-stay-awake
$ gnome-stay-awake
```
