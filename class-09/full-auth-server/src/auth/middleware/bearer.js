'use strict';

const users = require('../models/users.js');

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('not authorized');

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateToken(token);

    req.user = validUser;
    console.log(req.user);
    req.token = validUser.token;

    next();
  } catch (e) {
    console.error(e);
  }
}