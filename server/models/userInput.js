

module.exports = (sequelize, Sequelize) => {
  const userInput =sequelize.define('userInput', {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
    request: {
      type: Sequelize.STRING
    }, 
    date: {
      type: Sequelize.DATEONLY
    }
  })
}

