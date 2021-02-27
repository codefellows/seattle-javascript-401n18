'use strict';

function handleError (err, req, res, next){
  res.status(500).send({ status: 500, msg: 'broke for some reason' });
}

module.exports = handleError;