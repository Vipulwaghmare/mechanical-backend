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
const userRoutes = require('./routes/user')
const gateRoutes = require('./routes/gate')
const eseRoutes = require('./routes/ese')
const questionRoutes = require('./routes/question')

// Connecting to the local database

// mongoose.connect(process.env.DATABASE,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(()=> console.log("Database connected"))
//     .catch(()=> console.log("Database connection Error"))

// Online mongodb collection

// const MongoClient = require('mongodb').MongoClient;
const uri = process.env.ONLINEDATABASE;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// })
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(()=> console.log("ONLINE DATABASE CONNECTED"))
    .catch(err => "ONLINE DATABASE CONNECTION ERROR")

// important middleware
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())

// Routes
app.use('/', authRoutes);
app.use('/', subjectRoutes)
app.use('/', userRoutes)
app.use('/', gateRoutes)
app.use('/', eseRoutes)
app.use('/', questionRoutes)

// setting up port and running
const port = 1000

app.listen(port,()=>{
    console.log(`${port} is running`)
})