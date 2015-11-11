require('shelljs/global');

module.exports = {

    website: function (given, to) {
        // TODO
        echo('Missing feature. Sorry!');
    },

    commandNotFound: function (command) {
        exec('bash ' + require('app-root-path') + '/src/bash-scripts/command-not-found.sh ' + command);
    }
};
