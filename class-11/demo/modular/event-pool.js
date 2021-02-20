'use strict';

const Events = require('events');
const events = new Events();

// Export ONE instance of events that all modules can share
// this is called a ... "singleton"
// Think of it as a global variable that all the modules can see and use
module.exports = events;
