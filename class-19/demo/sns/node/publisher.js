'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
var sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:335083857671:test-with-sqs';

const params = {
  Message: 'Hi, John!',
  TopicArn: topic,
};


sns.publish(params).promise().then( data => console.log(data) ).catch(console.error);
