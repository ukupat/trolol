'use strict';

var path = require('path');
var assert = require('assert');

describe('The path resolution method', function() {
	var resolve = require('../lib/resolve.js');

	// Check global paths
	it('should use require.main.filename if the path is in the globalPaths array', function() {
		var expected = path.dirname(require.main.filename);
		require('module').globalPaths.forEach(function(globalPath) {
			var testPath = globalPath + path.sep + 'node-app-root-path';
			assert.equal(resolve(testPath), expected);
		});
	});

	// Check some standard path layouts
	it('should use String.split() in common cases', function() {
		var cases = [
			'/var/www/node_modules/node-app-root-path',
			'/var/www/node_modules/somemodule/node_modules/node-app-root-path',
			'/var/www/node_modules/somemodule/node_modules/someothermodules/node_modules/node-app-root-path',
		];
		var expected = '/var/www';
		cases.forEach(function(testPath) {
			assert.equal(resolve(testPath), expected);
		});
	});

	// Check root path
	it('should still use String.split() in the root directory', function() {
		assert.equal(resolve('/node_modules'), '');
	});

	// Check unexpected path
	it('should use require.main.filename on unexpected input', function() {
		var cases = [
			'just-some-jibberish',
			'/var/www/libs/node-app-root-path'
		];
		var expected = path.dirname(require.main.filename);
		cases.forEach(function(testPath) {
			assert.equal(resolve(testPath), expected);
		});
	});

	// Check when setting via environmental variable
	it('should respect the APP_ROOT_PATH environmental variable', function() {
		var expected = '/some/arbirary/path';
		var originalPath = process.env.APP_ROOT_PATH;
		process.env.APP_ROOT_PATH = expected;
		assert.equal(resolve('/somewhere/else'), expected);
		process.env.APP_ROOT_PATH = originalPath;
	});
});

describe('The public interface', function() {
	var lib = require('../lib/app-root-path.js');
	var root = path.resolve(__dirname);
	var pub = lib(root + '/node_modules/app-root-path');

	it('should expose a resolve() method that resolves a relative path to the root path', function() {
		assert(pub.resolve);
		assert.equal(pub.resolve('subdir/filename.js'), root + '/subdir/filename.js');
	});

	it('should expose a require() method that properly loads a module relative to root', function() {
		assert(pub.require);
		var testlib = pub.require('lib/testlib.js');
		assert.equal(testlib, 'hello world');
	});

	it('should implement toString()', function() {
		assert(pub.toString);
		assert.equal(pub + '', root);
		assert.equal(pub.toString(), root);
	});

	it('should allow explicitly setting the root path with setPath()', function() {
		assert(pub.setPath);
		var originalPath = pub.toString();
		pub.setPath('/path/to');
		assert.equal(pub.resolve('somewhere'), '/path/to/somewhere');
		pub.setPath(originalPath);
	});

	it('should expose the app root path as a .path property', function() {
		assert(pub.path);
		assert.equal(pub.path, pub.toString());
	});
});