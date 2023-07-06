'use strict';

module.exports = (req, res, next) => {
  console.log(`Hello universe`);
  next();
  //next is required for the req/res cycle!!
};