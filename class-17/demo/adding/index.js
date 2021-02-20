// You can require any external dependencies here

// All Serverless functions (AWS and Azure) are "async" ...
exports.handler = async (event) => {

  // the "event" contains all of the information from the Query String, Body, and Params

  console.log('__EVENT__', event);

  // Pretend we got some numbers in as the body
  const a = event.body.a || 0;
  const b = event.body.a || 0;
  const sum = a + b;

  // A lambda function (here at AWS and also at Azure) always returns a response object
  // statusCode must be a valid HTTP status
  // body must be a string, containing the function's output
  const response = {
    statusCode: 200,
    body: JSON.stringify(`The sum of ${a} and ${b} is ${sum}`),
  };

  return response;

};
