const express = require('express');
const UserInput = require("../models/userInput")
const Inputs = express.Router()


Inputs.post('/post-input', async (req, res) => {
  console.log('hit post-input')
  console.log(req.body)

  try{
      const result = await UserInput.findAll({where: {id : 1}})
      console.log(result)
  } 
  catch (err ) {
    console.error("error", err)
  }

})


module.exports = Inputs;