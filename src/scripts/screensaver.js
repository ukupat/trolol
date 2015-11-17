var screensaver = require('screensaver');

function run(times) {
    if (times === 0) {
        return;
    }

    setTimeout(function () {
        screensaver().then(function () {
            times -= 1;

            run(times);
        });
    }, Math.floor((Math.random() * 30) + 5) * 1000);
}

module.exports.start = function (times, wait) {
    setTimeout(function () {
        run(parseInt(times, 10));
    }, wait * 1000);

    console.log('Random start of the screensaver ' + times + ' times is going to be activated in ' + wait + ' second(s), trololol...');
};
