const express = require("express");
const app = express();
require('dotenv').config()
var cors = require('cors')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

//Importing Mongoose
const mongoose = require("mongoose");
// Importing Routes
const authRoutes = require("./routes/auth")
const subjectRoutes = require('./routes/subject')

// Connecting to the database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Database connected"))
    .catch(()=> console.log("Database connection Error"))

// important middleware
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

// Routes
app.use('/', authRoutes);
app.use('/', subjectRoutes)

// setting up port and running
const port = 1000

app.listen(port,()=>{
    console.log(`${port} is running`)
})