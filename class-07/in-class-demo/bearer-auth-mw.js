'use strict';

const users = require('./user.js');

module.exports = (req, res, next) => {
  if (!req.headers.authorization) { next('invalid') };

  let token = req.headers.authorization.split(' ').pop();

  users.authenticateToken(token)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(e => next('invalid token'));
}