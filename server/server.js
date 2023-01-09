//Express
const express = require("express");
const app = express();
app.use(express.json());

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

//Cors
const cors = require("cors");
app.use(cors());

//Dotenv
require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;
app.use('/api/poems', require('./routes/poemRoutes.js'))
const {errorHandler} = require('./middleware/errorMiddleware')
app.use(errorHandler)

//DB stuff
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});