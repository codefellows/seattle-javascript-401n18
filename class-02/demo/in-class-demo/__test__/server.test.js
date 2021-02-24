'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server); // supertest takes in our server so it can be started / ran during testing

// describe -> test suite
describe('**** API SERVER ****', () => {

  // it -> your actual assertions
  it('should respond with a 500 on a server error', () => {
    mockRequest.get('/bad-route')
    .then(results => {
      expect(results.status).toBe(500);
    })
  });

  it('should respond with a 404 on not found', () => {
    mockRequest.get('/not-a-route')
    .then(results => {
      expect(results.status).toBe(404);
    })
  });

  it('should respond with square of 10 being 100', async () => {
    await mockRequest.get('/squared')
      .then(results => {
        expect(results.status).toBe(200);
      })
  });
})

