'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    console.log(req.user);
    if (req.user.capabilities.includes(capability)) {
      next();
    } else {
      throw new Error('improper access');
    }
  }
}