'use strict';
const uuid = require('uuid').v4;
const {Producer} = require('sqs-producer');

const producer = Producer.create({
  queueUrl: `https://sqs.us-west-2.amazonaws.com/335083857671/john-testing-queue`,
  region: `us-west-2`,
});


let counter = 0;

setInterval( async () => {

  try {
    const message = {
      id: uuid(),
      body: `This is message #${counter++}`,
    };

    const response = await producer.send(message);
    console.log(response);
  } catch(e) {
    console.error(e);
  }
}, Math.floor(Math.random() * 1000));


