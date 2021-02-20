'use strict';

// 3rd Party Dependencies (modules)
const express = require('express');

// Our own custom modules
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');

const app = express();

// Express Global Middleware
app.use(express.json());

// Our own Global Middleware
app.use(logger);

// Route
// Maybe have a piece of middleware in the route to help with code review questions
app.get('/demo', demoRouteHandler);

function demoRouteHandler(req, res) {
  res.status(200).send('I work');
}


// Our Error Handlers -- need to be the last things defined!
// These use the external modules we required above
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export an object with the express app and separate method that can start the server
module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error("Missing Port"); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
