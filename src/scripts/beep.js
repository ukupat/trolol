var beeper = require('beeper');

module.exports = {

    start: function (times, wait) {
        setTimeout(function () {
            times = times;

            var x = 0;
            var intervalId = setInterval(function () {
                beeper();

                if (++ x == times)
                    clearInterval(intervalId);

           }, (Math.floor(Math.random() * 10) + 1)  * 1000);
        }, wait * 1000);

        console.log('Beeping will start in ' + wait + ' second(s), trololol...');
    }
};
