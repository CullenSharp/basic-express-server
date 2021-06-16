'use strict';

//dependencies
const express = require('express');

//middleware
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const error404 = require('./error-handlers/404');
const error500 = require('./error-handlers/500');

//app setup
const app = express();

app.use(logger);

app.get('/person', validator, (req, res) => {
  res.status(200).send({name: req.query.name});
})

app.use('*', error404);
app.use(error500);

module.exports = app;