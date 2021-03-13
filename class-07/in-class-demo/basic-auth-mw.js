'use strict';

const base64 = require('base-64');
const users = require('./user.js');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) { 
    next('not authorized');
    return;
  }

  let basic = req.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':');
  // the above is the same as this:
  // let user = base64.decode(basic).split(':')[0];
  // let pass = base64.decode(basic).split(':')[1];

  users.authenticateBasic(user, pass)
    .then(user => {
      req.user = user; // modify the request object and add a user property to it
      next();
    })
    .catch(e => next('user not valid'));
}