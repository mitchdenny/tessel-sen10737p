var tessel = require('tessel');
var sen10737p = require('../index');

var gpio = tessel.port['GPIO'];
var ranger = sen10737p.use(gpio);

var distance = ranger.getDistance(function (err, distance) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(distance);
});
