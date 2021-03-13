'use strict';


const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const User = require('./user.js');
const basicAuth = require('./basic-auth-mw.js');
const bearerAuth = require('./bearer-auth-mw.js');

dotenv.config();

const PORT = process.env.PORT || 3333;

const app = express();

app.use(express.static('./public')); // new but go ahead and add to servers for now
app.use(express.json()); // allow us to pass around json formatted data in the req body
app.use(morgan('dev')); // log request details of every incoming request to our app - better version of our logger middleware

// username and password attached to the request body
app.post('/signup', (req, res) => {
  // this is coming from our user model, which has methods and hooks attached to it (./users.js)
  const user = new User(req.body);
  user.save() // the pre hook will "hook" into this and hash our password before it is actually saved
    .then(user => {
      res.status(200).send(user);
    })
});

// all about using a Basic authorization header that contains username and password
// this will "sign the user in" and return a user with an associated token
// so that the user can now access other routes
app.post('/signin', basicAuth, (req, res) => {
  res.status(200).json({ msg: 'sign in successful', user: req.user });
});

// use a Bearer auth header, which is our token, to access this route
// user specific access to this route (closed route)
app.get('/user', bearerAuth, (req, res) => {
  res.status(200).json({ msg: 'user authorized to access route', user: req.user });
});

// open access to this route
app.get('/anyone-can-access', (req, res) => {
  res.status(200).send('great, cool');
});

const mongooseOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect('mongodb://localhost:27017/auth-server-demo', mongooseOptions)
  .then(() => {
    app.listen(PORT, () => console.log(`server up: ${PORT}`));
  })
  .catch(e => console.error(e));