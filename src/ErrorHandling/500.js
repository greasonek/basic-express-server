'use strict';

function handle500 (err, req, res, next) {
  const error = err.message ? err.message : err;
  // res.status(500).send({
  //   error: 500,
  //   route: req.path,
  //   query: req.query,
  //   body: req.body,
  //   message: `SERVER ERROR: ${error.message}`
  // })
  const errorObj = {
    status: 500,
    message: error,
  };
  res.status(500).json(errorObj);
}

module.exports = handle500;