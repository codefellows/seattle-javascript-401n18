'use strict';

const dynamoose = require('dynamoose');

const friendsSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'phone': String,
});

module.exports = dynamoose.model('friends', friendsSchema);
