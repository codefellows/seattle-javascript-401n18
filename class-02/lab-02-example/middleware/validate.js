'use strict';

const { AssertionError } = require("assert");

const validator = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next('name not provided') // error handling middleware
  } else {
    next(); // validator checked out, move to the next middleware in the chain (route), if not, go into the route logic
  }
}

module.exports = validator;