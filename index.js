function Ranger(hardware) {
  var self = this;
  self.hardware = hardware;
  self.signal = self.hardware.pin['G3'];

  return {
    getDistance: function(callback) {
      console.log('Setting direction to output.');
      self.signal.rawDirection(true);

      console.log('Writing LOW.');
      self.signal.write(false);

      setTimeout(function() {
        console.log('Writing HIGH.');
        self.signal.write(true);

        setTimeout(function() {
          console.log('Writing LOW.');
          self.signal.write(false);

          console.log('Setting direction to input.');
          self.signal.rawDirection(false);

          console.log('Waiting for pulse.');
          self.signal.readPulse('HIGH', 1000, function(err, duration) {
            if (err) {
              callback(err);
              return;
            }

            callback(null, duration);
          });
        }, 5);
      }, 2);
    }
  };
}

function use(hardware) {
  var ranger = new Ranger(hardware);
  return ranger;
}

exports.use = use;
