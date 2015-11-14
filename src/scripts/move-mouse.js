var robot = require('robotjs');

module.exports = {

    start: function (length, wait) {
        setTimeout(function () {
            length = length * 10;

            var x = 0;
            var intervalId = setInterval(function () {
                var mouse = robot.getMousePos();

                var xRand = Math.random() - 0.5;
                var yRand = Math.random() - 0.5;

                robot.moveMouseSmooth(mouse.x + 30 * xRand, mouse.y + 30 * yRand);

               if (++ x == length) clearInterval(intervalId);
            }, 100);
        }, wait * 1000);

        console.log('Random mouse movement loop is going to be activated in ' + wait + ' second(s), trololol...');
    }
};
