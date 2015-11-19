require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec(generateBashCommand('friday') + ' ' + wait);
    },

    saturday: function (wait) {
        exec(generateBashCommand('saturday') + ' ' + wait);
    },

    say: function (message, scary, wait) {
        var voice = scary ? 'Whisper' : 'Alex';

        exec(generateBashCommand('say') + ' "' + message + '" ' + voice + ' ' + wait);
    },

    mmm: function (cycles, rest, wait, voice) {
        exec(generateBashCommand('mmm') + ' ' + cycles + ' ' + rest + ' ' + wait + ' ' + voice );
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
