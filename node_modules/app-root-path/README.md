# App Root Path Module

[![Build Status](https://travis-ci.org/inxilpro/node-app-root-path.svg)](https://travis-ci.org/inxilpro/node-app-root-path) [![Dependency Status](https://david-dm.org/inxilpro/node-app-root-path.svg)](https://david-dm.org/inxilpro/node-app-root-path)

> **Please Note:** Due to the very limited scope of this module, I do not anticipate needing to make very many changes to it.  Expect long stretches of zero updates—that does not mean that the module is outdated.

This simple module helps you access your application's root path from anywhere in the application without resorting to relative paths like `require("../../path")`.

## Installation

``` bash
$ npm install app-root-path --save
```

## Usage

To simply access the app's root path, use the module as though it were a string:

``` js
var appRoot = require('app-root-path');
var myModule = require(appRoot + '/lib/my-module.js');
```

A helper function is also provided:

``` js
var reqlib = require('app-root-path').require;
var myModule = reqlib('/lib/my-module.js');
```

It's a little hacky, but you can also put this method on your application's `global` object to use it everywhere in your project:

``` js
// In app.js
global.reqlib = require('app-root-path').require;

// In lib/module/component/subcomponent.js
var myModule = reqlib('/lib/my-module.js');
```

Finally, you can also just resolve a module path:

``` js
var myModulePath = require('app-root-path').resolve('/lib/my-module.js');
```

You can explicitly set the path, using the environmental variable `APP_ROOT_PATH` or by calling `require('app-root-path').setPath('/my/app/is/here')`

## How It Works (under the hood)

> No need to read this unless your curious—or you run into a (very unlikely) case where the module does not work as expected.

This module uses two different methods to determine the app's root path, depending on the circumstances.

### Primary Method

If the module is located inside your project's directory, somewhere within the `node_modules` directory (whether directly, or inside a submodule), we effectively do (the actual code takes cross-platform path names/etc into consideration):

``` js
path.resolve(__dirname).split('/node_modules')[0];
```

This will take a path like `/var/www/node_modules/submodule/node_modules/app-root-path` and return `/var/www`.  In nearly all cases, this is just what you need.

### Secondary Method (for edge cases)

The node module loader will also look in a few other places for modules (for example, ones that you install globally with `npm install -g`).  These can be in one of: 

  - `$HOME/.node_modules`
  - `$HOME/.node_libraries`
  - `$PREFIX/lib/node`

Or, anywhere in the `NODE_PATH` environmental variable ([see documentation](http://nodejs.org/api/modules.html#modules_loading_from_the_global_folders)).

In these cases, we fall back to an alternate trick:

``` js
path.dirname(require.main.filename);
```

When a file is run directly from Node, `require.main` is set to that file's `module`.  Each module has a `filename` property that refers to the filename of that module, so by fetching the directory name for that file, we at least get the directory of file passed to `node`.  In some cases (process managers and test suites, for example) this doesn't actually give the correct directory, though, so this method is only used as a fallback.

## Change Log

### 1.0.0
  - No changes.  Just updated the version to signify a locked API (see [semver](http://semver.org/)).

### 0.1.1
  - Added Windows support (and, theoretically, other operating systems that have a directory separator that's not "/")

### 0.1.0
  - Completely rewrote the path resolution method to account for most possible scenarios.  This shouldn't cause and backwards compatibility issues, but always test your code.
  - Removed the need to pass a modules's `require()` method to the `appRootPath.require()` function.  Which it's true that each module has its own `require()` method, in practice it doesn't matter, and it's **much** simpler this way.
  - Added tests


