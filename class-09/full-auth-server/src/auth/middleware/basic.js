'use strict';

const base64 = require('base-64');
const User = require('../models/users.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) throw new Error('unauthorized');

  let basic = req.headers.authorization.split(' ').pop();
  let [user, pass] = base64.decode(basic).split(':'); // now we have a plain text username:password

  // assign user to the request
  req.user = await User.authenticateBasic(user, pass);
  next();
}