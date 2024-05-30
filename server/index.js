const express = require("express");
const cors = require("cors");
const sequelize = require("./models/index")

// import router from controller into here to use
const Inputs = require('./controllers/userInput.js') 

var corsOptions = {
  //this is what the client is running on
  origin: "http://127.0.0.1:5173"
};


const app = express()
const PORT = 3555;


app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/user-input', Inputs)


app.get('/api/cat', (req, res) => {
  res.send("Baby Cat");
});

//updates models into the database
sequelize.sync();

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});