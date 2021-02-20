'use strict';

require('dotenv').config();

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: process.env.SQS_QUEUE,
  handleMessage: handler,
});

function handler(message) {
  console.log(message);
}

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();

