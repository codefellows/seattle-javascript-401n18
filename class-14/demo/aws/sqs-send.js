'use strict';

require('dotenv').config();
const uuid = require('uuid/v4');
const Producer = require('sqs-producer');

// create simple producer
const producer = Producer.create({
  queueUrl: process.env.SQS_QUEUE,
  region: 'us-west-2',
  //  accessKeyId: 'yourAccessKey',
  //  secretAccessKey: 'yourSecret'
});

const message = {
  id: uuid(),
  body: "Very Hungry ...",
};

producer.send(message, function (err, msg) {
  if (err) { console.log(err); }
  else {
    console.log('Sent', message);
  }
});


