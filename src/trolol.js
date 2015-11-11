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

    friday: function (wait) {
        wait = wait || 0;

        if (isMac())
            macTrolls.friday(wait);
        else
            linuxTrolls.friday(wait);
    }
};

function isMac() {
    return /^darwin/.test(process.platform);
}
