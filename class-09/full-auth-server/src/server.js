'use strict';

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./auth/routes.js');

const app = express();

// just add this to your server, try to remember when setting up/configuring it
app.use(express.json());
app.use(authRoutes);

module.exports = {
  server: app,
  start: (port) => {
    if (!port) throw new Error('no port provided');
    app.listen(port, () => {
      console.log(`server up: ${port}`);
    })
  }
}