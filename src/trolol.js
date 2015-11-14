require('shelljs/global');

var rootPath = require('app-root-path');

var macTrolls = require(rootPath + '/src/os-specific/trolol-mac.js');
var linuxTrolls = require(rootPath + '/src/os-specific/trolol-linux.js');

module.exports = {

    website: function (given, to) {
        // TODO
        echo('Missing feature. Sorry!');
    },

    commandNotFound: function (command) {
        exec('bash ' + rootPath + '/src/scripts/command-not-found.sh ' + command);
    },

    friday: function (options) {
        wait = options.wait || 0;

        isMac() ? macTrolls.friday(wait) : linuxTrolls.friday(wait);
    },

    volumeLevel: function (length, options) {
        if (isMac())
            macTrolls.volumeLevel(length, options.wait || 0);
        else
            echo('Missing feature for this OS. Sorry!')
    },

    brightness: function (length, options) {
        wait = options.wait || 0;

        exec('bash ' + rootPath + '/src/scripts/brightness.sh ' + rootPath + '/node_modules/.bin/brightness ' + length + ' ' + wait)
    },

    moveMouse: function (length, options) {
        require(rootPath + '/src/scripts/move-mouse.js').start(length, options.wait || 0);
    }
};

function isMac() {
    return /^darwin/.test(process.platform);
}
