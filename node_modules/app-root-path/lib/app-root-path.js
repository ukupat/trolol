'use strict';

module.exports = function(dirname) {
	var path = require('path');
	var resolve = require('./resolve.js');
	var appRootPath = resolve(dirname);

	var publicInterface = {
		resolve: function(pathToModule) {
			return path.join(appRootPath, pathToModule);
		},

		require: function(pathToModule) {
			// Backwards compatibility check
			if ('function' === typeof pathToModule) {
				console.warn('Just use appRootPath.require() -- no need to pass in your ' +
							 'modules\'s require() function any more.');
				return function(pathToModule) {
					return publicInterface.require(pathToModule);
				}
			}

			return require(publicInterface.resolve(pathToModule));
		},

		toString: function() {
			return appRootPath;
		},

		setPath: function(explicitlySetPath) {
			appRootPath = path.resolve(explicitlySetPath);
		},

		path: appRootPath
	};

	return publicInterface;
};