const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const dotenv = require("dotenv")
const nodemailer = require("nodemailer");

require("dotenv").config();
// dotenv.config()
// file import area

mongoose.connect("mongodb://localhost/StackDB", () =>
  console.log("connected to StackDB")
);

// use area
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const { registerRoute } = require("./route/register");
const { loginRoute } = require("./route/login");
const { ForgotRoute } = require("./route/forgetPassword");

// Route Middleware
app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", ForgotRoute);
app.listen(4040, () => console.log("server is runing"));
