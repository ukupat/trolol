require('shelljs/global');

var currentPath = __dirname;

var macTrolls = require('./os-specific/trolol-mac.js');
var linuxTrolls = require('./os-specific/trolol-linux.js');

module.exports = {

    website: function (from, to) {
        exec('bash ' + currentPath + '/scripts/hosts.sh ' + from + ' ' + to);
    },

    commandNotFound: function (command) {
        exec('bash ' + currentPath + '/scripts/command-not-found.sh ' + command);
    },

    friday: function (options) {
        wait = options.wait || 0;

        isMac() ? macTrolls.friday(wait) : linuxTrolls.friday(wait);
    },

    volumeLevel: function (length, options) {
        if (isMac())
            macTrolls.volumeLevel(length, options.wait || 0);
        else
            echo('Missing feature for this OS. Sorry!');
    },

    brightness: function (length, options) {
        wait = options.wait || 0;

        exec('bash ' + currentPath + '/scripts/brightness.sh ' + currentPath + '/../node_modules/.bin/brightness ' + length + ' ' + wait)
    },

    moveMouse: function (length, options) {
        require('./scripts/move-mouse.js').start(length, options.wait || 0);
    },

    disableMouse: function (length, options) {
        require('./scripts/disable-mouse.js').start(length, options.wait || 0);
    },

    say: function (message, options) {
        if (isMac())
            macTrolls.say(message, options.scary, options.wait || 0);
        else
            echo('Missing feature for this OS. Sorry!');
    },

    beep: function (times, options) {
        require('./scripts/beep.js').start(times, options.wait || 0);
    },

    photoBooth: function (times, options) {
        if (isMac())
            macTrolls.photoBooth(times, options.wait || 0);
        else
            echo('Missing feature for this OS. Sorry!');
    },

    spotify: function (times, options) {
        if (isMac())
            macTrolls.spotify(times, options.wait || 0);
        else
            echo('Missing feature for this OS. Sorry!');
    }
};

function isMac() {
    return /^darwin/.test(process.platform);
}
