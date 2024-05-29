const db = require('../models/index')
const userInput = db.userInput
//const userInput = require("./userInput.js")
const userInputs = express.Router



userInputs.get('/get-input', (req, res) => {
  userInput.findAll = (req, res) => {
  
  } 

})