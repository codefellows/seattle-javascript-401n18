'use strict';

require('./eyes.js');
require('./arms.js');

// Instead of making my own event hub
// ...
// const Events = require('events');
// const events = new Events();

// Lets use a "shared" event hub
const events = require('./hub');

setInterval(() => {
  let b = Math.random() * 100;
  console.log('\n ----------------- \n');

  let payload = {
    brightness: b,
  };

  console.log(payload);

  events.emit('light', payload);
}, 250);
