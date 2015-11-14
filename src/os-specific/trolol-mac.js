require('shelljs/global');

var rootPath = require('app-root-path');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    volumeLevel: function (length, wait) {
        exec(generateBashCommand('volume-level') + ' ' + length + ' ' + wait);
    },

    brightness: function (length, wait) {
        exec('bash ' + rootPath + '/src/scripts/mac/brightness.sh ' + rootPath + '/node_modules/.bin/brightness ' + length + ' ' + wait)
    }
};

function generateBashCommand(scriptFile) {
    return 'bash ' + rootPath + '/src/scripts/mac/' + scriptFile + '.sh';
}
