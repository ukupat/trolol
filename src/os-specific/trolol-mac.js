require('shelljs/global');

var rootPath = require('app-root-path');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    volumeLevel: function (length, wait) {
        exec(generateBashCommand('volume-level') + ' ' + length + ' ' + wait);
    }
};

function generateBashCommand(scriptFile) {
    return 'bash ' + rootPath + '/src/scripts/mac/' + scriptFile + '.sh';
}
