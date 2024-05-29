const dbConfig = require('../config/db.config.js')
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.userInput = require("./userInput.js")(sequelize, Sequelize);

db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db;