const db = require('../models/index')
const userInput = db.userInput
//const userInput = require("./userInput.js")
const userInputs = express.Router



userInputs.get('/get-input', (req, res) => {
  // req params here
  
  userInput.findAll = (req, res) => {
    // logic for finding all
  } 

})