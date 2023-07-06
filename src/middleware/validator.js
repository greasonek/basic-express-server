'use strict';

module.exports = (req, res, next) => {
  const { name } = req.query;

  if(!name) {
    res.status(500).json({error: 'Give me your name!'})
  } else {
    next();
  }
};