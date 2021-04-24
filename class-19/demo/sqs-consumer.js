'use strict';

const { Consumer } = require('sqs-consumer');
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/335083857671/john-testing-queue',
  handleMessage: async (message) => {
    console.log(message.Body);
  }
});

app.start();
