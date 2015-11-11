require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec('bash ' + require('app-root-path') + '/src/scripts/mac/friday.sh ' + wait);
    }
};
