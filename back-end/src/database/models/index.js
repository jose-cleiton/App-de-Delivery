const { Sequelize } = require('sequelize');
require('dotenv').config();
const config = require('../config/config');

const { NODE_ENV } = process.env;

const sequelize = new Sequelize(config[NODE_ENV] || config.development);

module.exports = {
  sequelize,
};
