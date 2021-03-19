'use strict';

const { Error } = require("mongoose");

module.exports = (capability) => {
  return (req, res, next) => {
    if (req.user.capabilities.includes(capability)) {
      next();
    } else {
      throw new Error('improper access');
    }
  }
}