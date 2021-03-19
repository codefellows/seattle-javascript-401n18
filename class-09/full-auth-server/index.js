'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-demo-cool';

const mongooseOptions = {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true  
}

mongoose.connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    server.start(3333);
  })