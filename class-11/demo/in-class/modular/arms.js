'use strict';

const events = require('./hub.js');

events.on('light', raiseArm);
events.on('bug touched me', raiseArm);

function raiseArm(payload) {
  if(payload.brightness >= 90 ) {
    console.log('Raise Arm');
    events.emit('light', {brightness:10});
  }
}

module.exports = {raiseArm};
