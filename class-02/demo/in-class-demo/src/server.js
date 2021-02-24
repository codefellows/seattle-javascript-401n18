'use strict';

// 1st party dependencies -> require('path');
// 3rd party dependencies -> require('express'); // require('superagent');
// internal modules -> require('./some-file.js');
// application constants -> const app = express();

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const errors = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');

// global -> app level middleware
app.use(express.json());
app.use(logger);

// build out routes - querystrings & request parameters
// built out middleware
// handle errors

// req.method = GET
// req.path = '/hello'
// req.query = { name: 'brian', role: 'instructor' }

// old way - with query strings
// http://localhost:3333/hello?
app.get('/hello', (req, res) => {
  // console.log('name', req.query.name);
  res.send(`hello ${req.query.user}`);
});

// this route is meant to throw an error (on purpose)
// which will pass the error all the way down to the
// error handling middleware (error first callback pattern)
app.get('/bad-route', (req, res) => {
  throw new Error('some message from error land');
})

// new way - with request parameter
// http://localhost:3333/shoes/nike/air-force-ones
app.get('/hello/:user', (req, res) => {
  res.send(`hello ${req.params.user}`);
});

function square(n) {
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next('not a number');
    } else {
      req.number = n * n;
      next();
    }
  }
}

app.get('/squared', square(10), (req, res) => {
  res.send(`the square of 10 is: ${req.number}`);
});

app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => {
      console.log(`listening: ${port}`);
    })
  }
}