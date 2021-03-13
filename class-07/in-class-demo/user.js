'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// SETUP AN "APP SECRET" TO SIGN OUR TOKEN
const SECRET = process.env.APP_SECRET || 'cool'; // APP LEVEL, NOT USER LEVEL

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { toJSON: { virtuals: true }});

// TODO: add methods to our user for things like:
// authenticate with username/password (basic auth)
// authorize with a jwt token (bearer auth)

users.virtual('token').get(function() {
  let token = {
    username: this.username
  }

  return jwt.sign(token, SECRET); // this will create a "token" for us, which includes our username and the app secret as a second layer of verification
});

// mongoose "pre" hook to run "before" the save method is called
users.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 10); // turn our pw into something uncrackable
});

// meant to check a plain text password with a hashed one
users.statics.authenticateBasic = async function(username, password) {
  const user = await this.findOne({ username });
  const valid = await bcrypt.compare(password, user.password); // checks the uncrackable password against a real one and returns -> true/false
  if (valid) { return user; }
  throw new Error('invalid username or password');
}

// this is meant to find a user in the DB, given the username from the token
// that means that they are authorized into the route
users.statics.authenticateToken = async function(token) {
  try {
    const parsed = jwt.verify(token, SECRET);
    const user = this.findOne({ username: parsed.username })
    if (user) { return user; }
    throw new Error('user not found');
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = mongoose.model('users', users);