'use strict';
// if applicable, 1st party dependencies
// 3rd party dependencies
const express = require('express');
const app = express();

// internal modules
// ./ -> considered a relative path
// __dirname -> point us to an absolute path
const notFound = require('./error-handlers/404.js');
const errors = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const itemRoutes = require('./routes/things.js');

// internal constants
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(itemRoutes); // now your routes are modular

// run this for everything
app.use('*', notFound);
// error handling middleware is always at the bottom of the
app.use(errors);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  }
}