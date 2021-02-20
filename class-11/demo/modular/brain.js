'use strict';

// Event Hub

const events = require('./event-pool');

// Require our body parts ... they will hear our events
require('./body-parts/arms/arms.js');
require('./body-parts/eyes/eyes.js');

// For now, we're a dumb brain, only caring about a single event.
// this one, comes to us from the eyes every time they blink.
// When it happens, we need to tell the rest of the body the new brightness
// so that each part can respond as it feels like

// The event handler takes in an event, and a callback to run.
// Callback can be writen inline as shown, or as a reference to a function
events.on('light-detected', (payload) => {
  events.emit('light', { brightness: payload })
});
