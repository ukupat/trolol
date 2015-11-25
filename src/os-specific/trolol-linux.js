require('shelljs/global');

module.exports = {

    rebecca: function (url,wait) {
        exec(generateBashCommand('rebecca') + ' ' + url + ' ' + wait);
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
