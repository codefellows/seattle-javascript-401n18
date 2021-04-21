'use strict';

// You can require any external dependencies here
const uuid = require('uuid').v4;
const dynamoose = require('dynamoose');
const friendModel = require('./friends.schema.js');


// All Serverless functions (AWS and Azure) are "async" ...
exports.handler = async (event) => {

  console.log('E', event);

  try {
    // event.pathParameters should contain our id
    const id = event.pathParameters && event.pathParameters.id;

    let data;

    if(id) {
      const list = await friendModel.query('id').eq(id).exec();
      data = list[0];
    } else {
      data = await friendModel.scan().exec();
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    };
  }

};
