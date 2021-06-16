'use strict';

const error500 = require('../error-handlers/500')

module.exports = (req, res, next) => {
  if(!req.query.name) { next(error500) }
  next();
}