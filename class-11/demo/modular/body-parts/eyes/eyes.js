'use strict';

const events = require('./event-pool');

// The brain will emit a "light" event with some payload ... here's how the eyes handle that
// Note, the eyes module probably cares about a billion other events ...
// Interesting ... we're the ones that started this whole thing with the setTimeout at the bottom
events.on('light', eyelid);
events.on('light', pupil);

function pupil(payload) {
  console.log('Eyes are dialted at', payload.brightness, '%');
}

function eyelid(payload) {
  if (payload.brightness >= 75) {
    console.log('eyes are squinting');
  }
}

// The eyes see all!
// Let's simulate walking outside
// Every 2 seconds, tell the brain how much light we detected
setInterval(() => {
  // Set a random number on a scale of 1-100 for how bright it is
  let brightness = Math.ceil(Math.random() * 100)
  console.log('--------------------------------');
  console.log('Brightness Detected:', brightness);

  // Tell the brain, we see some light
  events.emit('light-detected', brightness)
}, 2000)

module.exports = { pupil, eyelid }
