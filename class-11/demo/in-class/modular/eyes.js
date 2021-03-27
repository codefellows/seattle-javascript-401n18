'use strict';

const events = require('./hub.js');

console.log('I am the eyes!');

// Do not test the event emission process!!!
events.on('light', eyelid);
events.on('light', pupils);

// Testing: Given a payload with "x" in it, my function does the right thing
function eyelid(payload) {
  // payload, we expect some value for how bright it is
  if (payload.brightness >= 25) {
    console.log('Squinting');
  } else {
    console.log('opening up');
  }
}

function pupils(payload) {
  if (payload.brightness >= 50) {
    console.log('Pupils are dilating');
  }
}
