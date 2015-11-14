var robot = require('robotjs');

module.exports = {

    start: function (length, wait) {
        setTimeout(function () {
            length = length * 100;

            var screen = robot.getScreenSize();
            var x = screen.width / 2;
            var y = screen.height / 2;

            var n = 0;
            var intervalId = setInterval(function () {
                robot.moveMouse(x, y);

                if (++n == length)
                    clearInterval(intervalId);
            }, 1);
        }, wait * 1000);

        console.log('Random mouse movement loop is going to be activated in ' + wait + ' second(s), trololol...');
    }
};
