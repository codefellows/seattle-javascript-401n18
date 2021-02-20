'use strict';

const { server } = require('../src/server-phase3.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  // these tests are wired with promise syntax. Note that we have to "return" in order for them to work
  it('should respond with a 500 on an error', () => {

    // Check the status code
    // Also ... check what's in the actual response?
    return mockRequest
      .get('/error-using-throw')
      .then(results => {
        // test inside of the .then()!!
        expect(results.status).toBe(500);
      });

  });

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/hello');
    expect(response.status).toBe(404);
  });

  it('should respond properly on request to /hello', async () => {
    const response = await mockRequest.get('/hello');
    expect(response.status).toBe(200);
    // We should also check what's in the response
  });

});
