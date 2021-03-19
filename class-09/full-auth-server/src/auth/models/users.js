'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // hash a plain text pw and compare a hashed pw against a plain txt pw
const jwt = require('jsonwebtoken'); // thing we use for creation (sign) of a jwt and verification (verify) of a jwt

const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin', 'editor']}
}, { toJSON: { virtuals: true }});

const appSecret = process.env.APP_SECRET || 'coolfunsecret';

users.virtual('token').get(() => {
  let tokenDetails = {
    username: this.username,
  }

  return jwt.sign(tokenDetails, appSecret);
})

users.virtual('capabilities').get(function () {
  let acl = {
    user: ['read'],
    editor: ['read', 'create', 'update'],
    admin: ['read', 'create', 'update', 'delete']
  };
  return acl[this.role];
});

users.pre('save', async function() {
  this.password = await bcrypt.hash(this.password, 10);
});

// time to sign in
users.statics.authenticateBasic = async function(username, password) {
  let userDetails = await this.findOne({ username });
  const valid = await bcrypt.compare(password, userDetails.password); // compare plain text from the req password with the pass in the db (hashed)
  if (valid) return userDetails;
  throw new Error('invalid user details');
}

// you are already signed in - let's check to make sure
users.statics.authenticateToken = async function(token) {
  const parsed = jwt.verify(token, appSecret);
  const foundUser = this.findOne({ username: parsed.username });
  if (foundUser) return foundUser;
  throw new Error('user not found');
}

module.exports = mongoose.model('users', users);