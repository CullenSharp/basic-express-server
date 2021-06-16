'use strict';

const supertest = require('supertest');
const server = require('../src/server');

const mockRequest = supertest(server);

describe('Test routes and error handlers', () => {

  test('throw status 404 on a bad route', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(404);
  })

  test('throw status 404 on bad method', async () => {
    const response = await mockRequest.post('/');
    expect(response.status).toEqual(404);
  })

  test('throw status 500 if query doesn\'t have name parameter', async () => {
    const response = await mockRequest.get('/person');
    expect(response.status).toEqual(500);
  })

  test('throw status 200 if name is in the query', async () => {
    const response = await mockRequest.get('/person?name=tim');
    expect(response.status).toEqual(200);
  } )

  test('given a name in the query, output is the correct object', async () => {
    const response = await mockRequest.get('/person?name=tim');
    expect(JSON.parse(response.text)).toEqual({name: "tim"});
  })
})