const express = require("express");
const app = express();
var cors = require('cors')
const bodyParser = require("body-parser")
//Importing Mongoose
const mongoose = require("mongoose");
// Importing Routes
const authRoutes = require("./routes/auth")

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/mechanical',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Database connected"))
    .catch(()=> console.log("Database connection Error"))

// middle ware
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/', authRoutes);

// setting up port and running
const port = 1000
app.listen(port,()=>{
    console.log(`${port} is running`)
})