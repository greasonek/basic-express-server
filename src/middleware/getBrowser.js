'use strict';

const getBrowser = (req, res, next) => {
  req.browser = req.headers('user-agent');
  next();
}

module.exports = getBrowser;