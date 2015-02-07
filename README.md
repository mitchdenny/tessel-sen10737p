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
## Wiring

According to [the Seeed Studio wiki](http://www.seeedstudio.com/wiki/Grove_-_Ultrasonic_Ranger), the SEN10737P supports both 3.3V and 5V power source. This means that you can wire-up the sensor directly to the Tessel assuming you are running it from the 3.3V power source. However if you are running from a 5V source you will need to step down the voltage.

The G3 pin on your Tessel's GPIO port supports the underlying ```readPulse(...)``` method that this library uses. Give it a try and if you encounter any problems [post an issue](https://github.com/mitchdenny/tessel-sen10737p/issues) or [hit the Tessel forums](https://forums.tessel.io/).

## Contributions

If you find a bug feel free to [fork the code](https://github.com/mitchdenny/tessel-sen10737p/fork) and submit a pull request.
