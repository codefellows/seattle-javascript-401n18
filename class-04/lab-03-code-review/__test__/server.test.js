'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  // These tests are wired with async/await --- so much cleaner!
  it('should respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.put('/food');
    expect(response.status).toBe(404);
  });

  it('can create a record', async () => {
    const data = {
      name: 'carrots',
      calories: 25,
      type: 'vegetable'
    };

    const response = await mockRequest.post('/food').send(data);
    expect(response.status).toBe(200);

    //Did we get an ID?
    expect(response.body.id).toBeDefined();

    // Is the data we sent in the database?
    Object.keys(response.body.data).forEach(key => {
      expect(response.body.data[key]).toEqual(data[key])
    })
  });

  it('can get list of records', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1);
  });

  it('can get a record', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
  });

  it('can update a record', async () => {
    const data = { name: "Broccoli" };
    const response = await mockRequest.put('/food/1').send(data);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual('object');
    expect(response.body.id).toEqual(1);
    expect(response.body.data.name).toEqual("Broccoli");
  });

  it('can delete a record', async () => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeFalsy();

    const getResponse = await mockRequest.get('/food');
    expect(getResponse.body.length).toEqual(0);

  });

});
