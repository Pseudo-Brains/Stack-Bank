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
<<<<<<< HEAD
const { ForgotRoute } = require("./route/forgetPassword");
=======
const { ForgotRoute} = require("./route/forgetPassword")
const { ResetPasswordRoute} = require("./route/reset-password")
>>>>>>> 70538d99ed5f633dda2575f4b2b8fdf7474d3873

// Route Middleware
app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", ForgotRoute);
app.use("/api", ResetPasswordRoute);



app.listen(4040, () => console.log("server is runing"));
