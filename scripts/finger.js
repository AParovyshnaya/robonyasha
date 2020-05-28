var finger = require('@amperka/digital-line-sensor').connect(P4);

var light = require('@amperka/led').connect(P13);

function blink() {
  light.blink(1);
}

finger.on('white', blink);
