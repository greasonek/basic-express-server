'use strict';

const express = require('express');
const server = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const getBrowser = require('./middleware/getBrowser.js');
const handle404 = require('./ErrorHandling/404.js');
const handle500 = require('./ErrorHandling/500.js');


// start function that will be used by index
function start(PORT) {
  server.listen(PORT, () => console.log(`I am listening on PORT ${PORT}`))
}

//If want middleware applied to every route we put it on top - Javascript reads from top down
server.use(logger);

// Global Express MW --> use before declaring routes
server.use(express.json());

//write test that will check the / route for 'hello world'
server.get('/', (req, res) => res.send('Hello World'));

//takes in a query string
server.get('/person', validator, (req, res) => {
  const { name } = req.query;
  res.json({name: name});
    //throw error
    // res.status(500).json({error: 'Give me your name!'});
    //return 
  } 
);

//req.param a key value pair where the key is defined by our route
server.get('/hello/:person', (req, res) => {
  //error handling here
  res.send(`Hello, ${req.params.person}`);
});

// add on to the req.body with a post request
server.post('/hello', (req, res) => {
  //req.body - JSON body --> key value pairs {'key': 'value'}
res.send(`Hello, ${req.body.name}`)
});

// server.get('/demo', getBrowser, (req, res) => {
//   res.send(`You are using ${req.browser}`);
// })

server.use('*', handle404);
server.use(handle500);

module.exports = { server, start };