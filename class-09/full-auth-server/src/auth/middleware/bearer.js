'use strict';

const users = require('../models/users.js');

module.exports = async (req, res, next) => {

  const token = req.headers.authorization.split(' ').pop();

  users.authenticateToken(token)
    .then(validUser => {
      req.user = validUser;
      next();
    })
}