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

// Middleware just for this app ... these could easily be modularized :)

// Change the "request", by adding the name of the browser to it directly
function getBrowser(req, res, next) {
  req.browser = req.headers['user-agent'];
  next();
}

// Curried middleware (can take a parameter)
// Adds a squared number to the request object
// Note how it calls next with a message if we have an error?
function square(n) {
  // Returns a middleware function ... the initial param (n) is visible within
  return (req, res, next) => {
    if (typeof n !== 'number') {
      next("Not a number!");
    }
    else {
      req.number = n * n;
      next();
    }
  };
}


// Some Routes (should be a review ... show how to send data from browser)
// Using GET and Query Params
app.get('/hello', (req, res) => {
  // Query String?
  // http://localhost:3000/hello?name=Fred
  // req.query.name will be "Fred"
  res.send(`Hi, ${req.query.name}`)
});

// Using GET with URL params
app.get('/hello/:person', (req, res) => {
  // URL Params can be pre-declared as variables
  // When they are present, express will match them
  // http://localhost/hello/Fred
  // req.params.person will be "Fred"
  res.send(`Hi there, ${req.params.person}`);
});

// Using POST
app.post('/hello', (req, res) => {
  // Now, we expect a JSON body
  // http://localhost:3000/hello
  // {"name":"Fred"} will be sent in with the request
  // req.body.name will be "Fred"
  console.log(req.body);
  res.send(`Howdy, ${req.body.name}`);
});

// These 2 routes are here to show how errors can be handled
// Their both declared solely to show the mechanics

app.get('/error-using-throw', (req, res, next) => {
  // Anytime an error is "thrown" (which is every error you've ever seen), the error handler is triggered
  throw new Error('Server has something wrong with it');
});

app.get('/error-using-next', (req, res, next) => {
  // If you call the next() function with any value that automatically triggers an error!
  next('Whoops, something went wrong');
});

// Here are some routes that use middleware ...

app.get('/demo', getBrowser, (req, res) => {
  res.send(`You are using ${req.browser}`);
});

// This one uses "curried" middleware, which means it runs the middle function
// immediately as the server starts up (square(4)) and then the actual middleware
// within is what gets used on the route
app.get('/number', square(4), (req, res) => {
  res.send(`The square of 4 is ${req.number}`);
});

// This route uses both middleware functions. Notice how "next()" just runs the next one in sequence
app.get('/both', getBrowser, square(5), (req, res) => {
  res.send(`Welcome visitor with ${req.browser}, 5 squared is ${req.number}`)
})


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
