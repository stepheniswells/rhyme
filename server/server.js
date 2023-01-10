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
app.use('/api/users', require('./routes/userRoutes.js'))
const {errorHandler} = require('./middleware/errorMiddleware')
app.use(errorHandler)

//DB stuff
const {connectDB} = require('./db/db');

connectDB()

app.listen(port, () => console.log(`Server started on port ${port}`))