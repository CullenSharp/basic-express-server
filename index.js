'use strict';

//dependencies
require('dotenv').config();

//include modules
const server = require('./src/server');

//setup port
const PORT = process.env.PORT;

server.listen(PORT, () => {console.log(`Listening on ${PORT}`)});