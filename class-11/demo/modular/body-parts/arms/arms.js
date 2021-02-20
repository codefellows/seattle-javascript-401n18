'use strict';

const events = require('./event-pool');
const handlers = require('./arms-handlers.js');

// The brain will emit a "light" event with some payload ... here's how the arms handle that
// Note, the arms module probably cares about a billion other events ...
// Note, also that we've pulled in the callback function from a separate module
events.on('light', handlers.coverEyes);
