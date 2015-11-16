require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    steve: function (wait) {
        exec(generateBashCommand('steve') + ' ' + wait);
    },

    eject: function (times, wait) {
        exec(generateBashCommand('eject') + ' ' + times + ' ' + wait);
    }
};

function generateBashCommand(scriptFile) {
    return 'bash ' + __dirname + '/../scripts/linux/' + scriptFile + '.sh';
}
