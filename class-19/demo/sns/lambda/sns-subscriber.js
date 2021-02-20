exports.handler = async (event) => {
  // TODO implement

  console.log('SNS Event', JSON.stringify(event, undefined, 2));
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
