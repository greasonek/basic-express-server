'use strict'

const handle404 = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: 'This page does not exist',
  });
};

module.exports = handle404;