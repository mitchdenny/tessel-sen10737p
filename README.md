# Tessel Driver for Grove Ultrasonic Ranger v1.0 (SEN10737P)

This package allows the use on the [Grove Ultrasonic Ranger v1.0 (SEN10737P)  sensor](http://littlebirdelectronics.com.au/products/grove-ultrasonic-ranger) on the [Tessel](http://tessel.io) board.

## Usage

Using the package is easy. Just download and install it via NPM.

```bash
npm install tessel-sen10737p --save
```

Once the package is downloaded and installed, you need to get a reference to a pin on the Tessel that supports reading a PWM pulse. The driver has been tested using the G3 pin on the GPIO port.

```js
// Load modules.
var tessel = require('tessel');
var sen10737p = require('tessel-sen10737p');

// Select a pin that supports reading a PWM pulse.
var gpio = tessel.port['GPIO'];
var pin = gpio.pin['G3'];

// Get a ranger which is bound to the PWM capable pin.
var ranger = sen10737p.use(pin);

// Call getDistance passing in a callback
ranger.getDistance(function (err, distance) {
    if (err) {
      console.log(err);
      return;
    }

    console.log(distance);
  });
};
```
