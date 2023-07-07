'use strict';

module.exports = (req, res, next) => {
  const { name } = req.query;

  if(!name) {
    res.status(500).json({error: 'SERVER ERROR 500: I need a name!'})
  } else {
    next();
  }
};