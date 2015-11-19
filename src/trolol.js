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

    rebecca: function (options) {
        var wait = options.wait || 0;
        var url = options.saturday ? 'https://www.youtube.com/watch?v=GVCzdpagXOQ' : 'https://www.youtube.com/watch?v=kfVsfOSbJY0';

        isMac() ? macTrolls.rebecca(url, wait) : linuxTrolls.rebecca(url, wait);
    },

    volumeLevel: function (length, options) {
        var wait = options.wait || 0;

        exec('bash ' + currentPath + '/scripts/volume-level.sh ' + currentPath + '/../node_modules/.bin/vol ' + length + ' ' + wait);
    },

    brightness: function (length, options) {
        var wait = options.wait || 0;

        exec('bash ' + currentPath + '/scripts/brightness.sh ' + currentPath + '/../node_modules/.bin/brightness ' + length + ' ' + wait);
    },

    screensaver: function (times, options) {
        require('./scripts/screensaver.js').start(times, options.wait || 0);
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

    mmm: function (options) {
        if (isMac())
            macTrolls.mmm(options.cycles || 10 , options.rest || 20 , options.wait || 0 , options.voice || 'Fred');
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
    },

    eject: function (times, options) {
        var wait = options.wait || 0;

        isMac() ? macTrolls.eject(times, wait) : linuxTrolls.eject(times, wait);
    },

    dickbutt: function () {
        exec('bash ' + currentPath + '/scripts/dickbutt.sh')
    }
};

function isMac() {
    return /^darwin/.test(process.platform);
}
