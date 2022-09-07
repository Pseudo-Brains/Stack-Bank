const express = require("express");
const mongoose = require("mongoose")
const bodyParser= require("body-parser")
const cors = require("cors")



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



app.listen(4040,()=> console.log("server is runing"))



