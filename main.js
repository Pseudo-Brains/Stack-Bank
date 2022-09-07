const express = require("express");
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const cors = require("cors")


// file import area 
const {loginRoute} = require("./route/login")



mongoose.connect("mongodb://localhost/StackDB",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
},()=> console.log("connected to StackDB"))
require('dotenv').config();

// use area 
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())


// app uses area 
app.use("/api", loginRoute)



app.listen(4040,()=> console.log("server is runing"))



