'use strict'

const supertest = require('supertest');
const { server } = require('../src/server.js');
// const { mock } = require('node:test');
const mockRequest = supertest(server);

describe('server routes and functionality', () => {
  test('The / route will send a response of Hello World', async () => {
    const response = await mockRequest.get('/');
    expect(response.text).toBe('Hello World');
  });
});