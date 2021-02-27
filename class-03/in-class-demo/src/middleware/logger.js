'use strict';

// we are going to use this as "route" level middleware today
// this is specific to any routes we call it on
// ex:  app.get('/some-endpoint', logger, (req, res) => { ... })
module.exports = (req, res, next) => {
  console.log('request info', req.path, req.method);
}