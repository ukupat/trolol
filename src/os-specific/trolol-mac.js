require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    say: function (message, scary, wait) {
        var voice = scary ? 'Whisper' : 'Alex';

        exec(generateBashCommand('say') + ' "' + message + '" ' + voice + ' ' + wait);
    },

    mmm: function (cycles, rest, wait) {
        exec(generateBashCommand('mmm') + ' ' + cycles + ' ' + rest + ' ' + wait);
    },

    photoBooth: function (times, wait) {
        exec(generateBashCommand('photo-booth') + ' ' + times + ' ' + wait);
    },

    spotify: function (times, wait) {
        exec(generateBashCommand('spotify') + ' ' + times + ' ' + wait);
    },

    eject: function (times, wait) {
        exec(generateBashCommand('eject') + ' ' + times + ' ' + wait);
    },

    steve: function (wait) {
        exec(generateBashCommand('steve') + ' ' + wait);
    }
};

function generateBashCommand(scriptFile) {
    return 'bash ' + __dirname + '/../scripts/mac/' + scriptFile + '.sh';
}
