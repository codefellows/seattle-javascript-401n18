var AWS = require('aws-sdk');

// constants
var MAX_WIDTH  = 100;
var MAX_HEIGHT = 100;

// get reference to S3 client
var s3 = new AWS.S3();

exports.handler = function(event, context, callback) {
  // Read options from the event.
  console.log('Reading options from event:\n', JSON.stringify(event,undefined,2));

  return {
    statusCode: 200,
    body: 'foobar',
  };
};

