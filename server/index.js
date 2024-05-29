const express = require("express");
const cors = require("cors");

const app = express()
const router = express.Router()
const db = require("./models")

const userInputs = require('./models/userInput') 

//this is what the client is running on
var corsOptions = {
  origin: "http://127.0.0.1:5173"
};

app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/userInput', userInputs)

const PORT = 3555;

app.get('/api/cat', (req, res) => {
  console.log('hit this')
  res.send("Baby Girl");
});

db.sequelize.sync();

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});