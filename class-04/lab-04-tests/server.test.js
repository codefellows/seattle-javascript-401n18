'use strict';

// fake server file
const server = require('../src/server.js');

// pull in testing dependencies
const supertest = require('supertest');
const mockRequest = supertest(server);


// TDD: Test Driven Development
// RED, GREEN, REFACTOR!!!
describe('WEB SERVER', () => {
  it('should return a 404 if no route found', () => {
    mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404);
      });
  })

  it('should return a 500 if the server is broke AF', () => {
    mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404);
      });
  })

  it('can create a new record in the db', async () => {
    let testFood = { name: 'test food item', calories: 100, type: 'VEG' }
    let response = await mockRequest.post('/food').send(testFood).then(response => {})
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
  })

  // it: some words describing what we are about to test
  it('can delete a record from the db', async () => {
    // we make a request to our app: DELETE /food/1
    await mockRequest.delete('/food/1')
      // then, our delete route deletes the thing and sends us a response
      .then(response => {
        // then, we apply "assertions" against our response
        expect(response.status).toBe(204);
        expect(response.body).toBeFalsy();
      })
  })

  it('can update a record from the db', () => {

  })

  it('retrieve a single record from the db', () => {

  })

  it('retrieve all records from the db', () => {
    
  })
})