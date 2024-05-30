const sequelize = require("./index")
const { DataTypes } = require('sequelize');

const UserInput = sequelize.define('userInput', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.STRING
  }, 
  date: {
    type: DataTypes.DATEONLY
  }
})

// UserInput.sync()
// console.log('The table for the User model was just (re)created!');

module.exports= UserInput

// module.exports = (sequelize, Sequelize) => {
//   console.log('hitting this in UserInput model')
//   const UserInput = sequelize.define('userInput', {
//     firstName: {
//       type: Sequelize.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: Sequelize.STRING,
//       // allowNull defaults to true
//     },
//     email: {
//       type: Sequelize.STRING,
//     },
//     message: {
//       type: Sequelize.STRING
//     }, 
//     date: {
//       type: Sequelize.DATEONLY
//     }
//   })
//   return UserInput;
// }




