var tessel = require('tessel');
var sen10737p = require('../index');

var gpio = tessel.port['GPIO'];
var pin = gpio.pin['G3'];

var ranger = sen10737p.use(pin);

var ping = function() {
  ranger.getDistance(function (err, distance) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(distance);
  });
};

ping();
