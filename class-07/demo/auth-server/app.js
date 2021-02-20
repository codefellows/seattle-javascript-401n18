'use strict';

// 3rd Party Resources
const express = require('express');
const mongoose = require('mongoose');
const User = require('./users.js');
const basicAuth = require('./basic-auth-middleware.js');
const bearerAuth = require('./bearer-auth-middleware.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(express.static('./public'));
app.use(express.json());

// echo '{"username":"john","password":"foo"}' | http post :3000/signup
app.post('/signup', (req, res) => {
  const user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).send(user);
    })
    .catch(e => { res.status(403).send("Error Creating User"); });
});

// http post :3000/signin -a john:foo
app.post('/signin', basicAuth, (req, res) => {
  res.status(200).send(req.user);
});

app.get('/user', bearerAuth, (req, res) => {
  res.status(200).json(req.user);
});

mongoose.connect('mongodb://localhost:27017/auth', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  })
  .catch(e => console.error('Could not start server', e.message));
