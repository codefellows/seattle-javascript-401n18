'use strict';

const Events = require('events');

// Event Pool or Hub
const events = new Events();

events.on('light', eyelid);
events.on('light', pupils);
events.on('light', arm);

// events.on('light', payload => {
//   arm(payload);
//   eyelid(payload);
//   pupils(payload);
// });

function eyelid(payload) {
  // payload, we expect some value for how bright it is
  if(payload.brightness >= 25){
    console.log('Squinting');
  } else {
    console.log('opening up');
  }
}

function pupils(payload) {
  if(payload.brightness >= 50) {
    console.log('Pupils are dilating');
  }
}

function arm(payload) {
  if(payload.brightness >= 90) {
    console.log('Covering the face');
    events.emit('light', {brightness:10});
  }
}


setInterval( () => {
  let b = Math.random() * 100;
  console.log('\n ----------------- \n');

  let payload = {
    brigtness: b,
  };

  events.emit('light', payload);
}, 50);


