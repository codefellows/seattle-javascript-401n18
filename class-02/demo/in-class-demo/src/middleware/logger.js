'use strict';

const logger = (req, res, next) => {
  console.log(`REQ PATH:`, req.path);
  console.log(`REQ METHOD:`, req.method);
  next(); // moves to the next piece of middleware -> if none, it's done
}

module.exports = logger;