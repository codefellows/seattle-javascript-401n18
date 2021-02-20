'use strict';

/*
  Class 16 = Node Events (Internal Events - One App)
  Class 17 = TCP Events (Multiple Clients - Many Apps, Computers talk to each other)
  Class 18 = Socket.io (Multiple Clients, Many Apps, but Class 16 syntax)
  Class 19 = Queues
*/

const Events = require('events');

const events = new Events();  // Event Pool
/*
  If we were coding this out the "functional" way, we'd need a function for every possible thing
  And in that function, we'd have to call every single body part
  respondToSun(level) {
    // eyelid();
    // pupil();
    // arm();
  }
*/

// The new way, is to just have all the body parts listen for something that they need to care about
// Respond to events
events.on('light', eyelid);
events.on('light', pupil);
events.on('light', arm);

function pupil(payload) {
  console.log('Eyes are dialted at', payload.brightness, '%');
}

function arm(payload) {
  if (payload.brightness >= 90) {
    console.log('Covering Eyes');
  }
}

function eyelid(payload) {
  if (payload.brightness >= 75) {
    console.log('eyes are squinting');
  }
}


// Here, we're going to simulate the part of the brain that tells the body what's happening
// Instead of running a function that calls out to every body part's function, we
// will insted "emit" or "fire" or "raise" an event. Body parts that care about this event
// will do things on their own in response.
// We are effectively able to run 'n' number of functions with one line of code (the 'emit')
// and not even know what code gets run in response to it!
setInterval(() => {
  let brightness = Math.ceil(Math.random() * 100);
  console.log('--------------------------------')
  console.log('Brightness:', brightness)
  events.emit('light', { brightness });
}, 2000)

