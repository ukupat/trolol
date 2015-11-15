require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    volumeLevel: function (length, wait) {
        exec(generateBashCommand('volume-level') + ' ' + length + ' ' + wait);
    },

    say: function (message, scary, wait) {
        var voice = scary ? 'Whisper' : 'Alex';

        exec(generateBashCommand('say') + ' "' + message + '" ' + voice + ' ' + wait);
    },

    photoBooth: function (times, wait) {
        exec(generateBashCommand('photo-booth') + ' ' + times + ' ' + wait);
    },

    spotify: function (times, wait) {
        exec(generateBashCommand('spotify') + ' ' + times + ' ' + wait);
    }
};

function generateBashCommand(scriptFile) {
    return 'bash ' + __dirname + '/../scripts/mac/' + scriptFile + '.sh';
}
