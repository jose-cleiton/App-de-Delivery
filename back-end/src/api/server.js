require('dotenv').config();
const { App } = require('./app');

const server = new App();

server.start();
