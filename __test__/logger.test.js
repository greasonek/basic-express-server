'use strict';
// const { describe } = require('yargs');
const logger = require('../src/middleware/logger.js');
// const { before, beforeEach, afterEach } = require('node:test');

// testing for did it log something? 
// did it call the next function?

describe('tests the logger middleware', () => {
  //arrange a couple things before testing
  let consoleSpy;
  let req = {path: '/test'};
  let res = {};
  let next = jest.fn(); //spies on the next value

  // mock functions are known as spies bc they let you spy on a fucntioncllaed idirectly by other code rather than testing the output.
  // create mock function with jest.fn()

  beforeEach( () => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('properly logs some output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith('Hello universe'); 
  });

  test('the next function get called', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });

  // .toHaveBeenCalledWith = a method chained on the expect() function in jest testing 
  // it's looking at what arguments were passed into a function
});