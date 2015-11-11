'use strict';

module.exports = function resolve(dirname) {
	var path = require('path');

	// Check for environmental variable
	if (process.env.APP_ROOT_PATH) {
		return path.resolve(process.env.APP_ROOT_PATH);
	}

	var globalPaths = require('module').globalPaths;
	var resolved = path.resolve(dirname);
	var alternateMethod = false;
	var appRootPath = null;

	// Make sure that we're not loaded from a global include path
	// Eg. $HOME/.node_modules
	//     $HOME/.node_libraries
	//     $PREFIX/lib/node
	globalPaths.forEach(function(globalPath) {
		if (!alternateMethod && 0 === resolved.indexOf(globalPath)) {
			alternateMethod = true;
		}
	});

	// If the app-root-path library isn't loaded globally, 
	// and node_modules exists in the path, just split __dirname
	var nodeModulesDir = path.sep + 'node_modules';
	if (!alternateMethod && -1 !== resolved.indexOf(nodeModulesDir)) {
		var parts = resolved.split(nodeModulesDir);
		if (parts.length) {
			appRootPath = parts[0];
			parts = null;
		}
	}

	// If the above didn't work, or this module is loaded globally, then
	// resort to require.main.filename (See http://nodejs.org/api/modules.html)
	if (alternateMethod || null == appRootPath) {
		appRootPath = path.dirname(require.main.filename);
	}

	// Return
	return appRootPath;
};