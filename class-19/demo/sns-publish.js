'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region:'us-west-2'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:335083857671:alert';

const payload = {
  Message: "Hello from John",
  TopicArn: topic,
};

sns.publish(payload).promise()
.then(data => {
  console.log(data)
})
.catch(console.error);
