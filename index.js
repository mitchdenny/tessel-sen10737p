function Ranger(pin) {
  var self = this;
  self.signal = pin;

  return {
    getDistance: function(callback) {
      self.signal.output(1);

      setTimeout(function() {
        self.signal.rawWrite(0);
      }, 10);

      self.signal.readPulse('high', 1000, function(err, duration) {
        if (err) {
          callback(err, 0);
          return;
        }

        var distance = ((duration * 1000) / 2) / 29.1;

        callback(null, distance);
      });
    }
  };
}

function use(pin) {
  var ranger = new Ranger(pin);
  return ranger;
}

exports.use = use;
