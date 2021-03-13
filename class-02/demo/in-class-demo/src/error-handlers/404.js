'use strict';

function handleNotFound(req, res, next) {
  res.status(404).json({ status: 404, message: 'not found '});
}

module.exports = handleNotFound;