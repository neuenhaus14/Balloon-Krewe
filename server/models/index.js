const dbConfig = require('../config/db.config.js')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userInput = require("./userInput.js")(sequelize, Sequelize);

module.exports = db;