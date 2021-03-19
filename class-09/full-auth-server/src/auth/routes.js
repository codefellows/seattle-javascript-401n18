'use strict';

const express = require('express');

const User = require('./models/users.js');
const basicAuth = require('./middleware/basic.js');
const bearerAuth = require('./middleware/bearer.js');
const permissions = require('./middleware/acl.js');

const auth = express.Router();

// user is attached to req.body
auth.post('/signup', async (req, res) => {
  let user = new User(req.body);
  const record = await user.save();
  res.status(201).json(record); // we are sending this back now so that we can see/test the user
});

auth.post('/signin', basicAuth, (req, res) => {
  let userDetails = {
    details: req.user,
    token: req.user.token
  }

  res.status(200).json(userDetails);
});

auth.get('/must-be-signed-in', bearerAuth, (req, res) => {
  res.status(200).send('you were able to access this because you have a token');
});

auth.get('/protected-route', bearerAuth, permissions('read'), (req, res) => {
  res.status(200).send('you are signed in and have proper permissions');
});

module.exports = auth;