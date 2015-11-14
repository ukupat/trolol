require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec('bash ' + require('app-root-path') + '/src/scripts/linux/friday.sh ' + wait);
    }
};
