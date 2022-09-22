require('dotenv/config');

const { Sequelize } = require('sequelize');
const config = require('../config/config');

const { NODE_ENV } = process.env;
const sequelize = new Sequelize(config[NODE_ENV] || config.development);

module.exports = { sequelize };
