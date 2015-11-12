require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    volumeLevel: function (length, wait) {
        exec(generateBashCommand('volume-level') + ' ' + length + ' ' + wait);
    }
};

function generateBashCommand(scriptFile) {
    return 'bash ' + require('app-root-path') + '/src/scripts/mac/' + scriptFile + '.sh';
}
