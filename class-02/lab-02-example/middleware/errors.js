'use strict';

// if your middleware is defined with 4 parameters, it is automatically
// error handling middleware

// the first parameter is representing an "error" object that would be passed
// to this middleware
module.exports = (err, req, res, next) => {
  const error = err.message ? err.message : err;

  const options = {
    status: 500,
    message: error
  }

  res.status(500).send(options);
}