'use strict';

const uuid = require('uuid/v4');
const Producer = require('sqs-producer');

// create simple producer
const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/335083857671/sqs-testing',
  region: 'us-west-2',
});


let counter = 0;

setInterval( () => {

  const message = {
    id:uuid(),
    body:`This is message ${++counter}`,
  };

  producer.send(message, function(err,msg) {
    if (err) { console.log(err); }
    else {
      console.log('Sent', message);
    }
  });

}, Math.floor(Math.random() * 500));


