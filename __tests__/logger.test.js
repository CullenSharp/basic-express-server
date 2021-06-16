'use strict';

const logger = require('../src/middleware/logger');

describe('logger should log request.method and request.path on request', () => {
  test('', () => {
    
    const requestObject = {
      method: 'GET',
      path: '/person'
    }

    const responseObject = {};
    const nextFunction = jest.fn();
    console.log = jest.fn();

    logger(requestObject, responseObject, nextFunction);
    expect(nextFunction).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('GET', '/person');
  })
})