require('shelljs/global');

module.exports = {

    friday: function (wait) {
        exec('bash ' + __dirname + '/../scripts/linux/friday.sh ' + wait);
    }
};
