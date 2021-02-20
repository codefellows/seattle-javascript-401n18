# AWS: Events

AWS provides 2 different means of providing inter-application messaging

- SNS - Simple Notification Service
- SQS - Simple Queue Service

## Learning Objectives

### Students will be able to

#### Describe and Define

- The differences between SNS and SQS
- Use cases for each
- FIFO Queues
- The publisher/subscriber relationship

#### Execute

- Create a notification topic that triggers an action
- Create a Queue that retains messages

## Today's Outline

<!-- To Be Completed By Instructor -->


## Notes

### SNS - Working with Notifications in Code

#### Publishing (Pushing) a message with SNS

This sample application contacts SNS and publishes a single message

```
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

const topic = 'arn:aws:sns:us-west-2:335083857671:TaskComplete';

var sns = new AWS.SNS();
const params = {
  Message: 'Hey there, Person!',
  TopicArn: topic
};
sns.publish(params).promise()
  .then( data => console.log(data) )
  .catch(console.error);
```


#### Subscribe to a topic

A node application such as below will continually run, waiting on notifications to be pushed to it, and will respond as they occur

```
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:335083857671:TaskComplete';

var params = {
  Protocol: 'sms',
  TopicArn: topic,
  Endpoint: '+12065551212',
  ReturnSubscriptionArn: true || false,
};

sns.subscribe(params).promise()
  .then( data => console.log('OK', data) )
  .catch( console.error );
```


### SQS - Queues

#### Publishing with Node.js

```javascript
'use strict';

const Producer = require('sqs-producer');

const queue = 'https://sqs.us-west-2.amazonaws.com/335083857671/sqs-testing';

// create simple producer
const producer = Producer.create({
  queueUrl: queue,
  region: 'us-west-2'
});

const message = {
  id: Math.random(), // should be a uuid or some other unique identifier
  body:`This is message ${++counter}`,
};

producer.send(message, function(err,msg) {
  if (err) { console.log(err); }
  else {
    console.log('Sent', message);
  }
});
```


#### Subscribing with Node.js

```javascript
'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/335083857671/sqs-testing',
  handleMessage: handler,
});

function handler(message) {
  console.log(message.Body);
}

app.on('error', (err) => {
  console.error(err.message);
});

app.on('processing_error', (err) => {
  console.error(err.message);
});

app.start();


```
