const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const jwt = require("jsonwebtoken")

require("dotenv").config();
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

<<<<<<< HEAD
=======



>>>>>>> f4fc648169b94823e0bf8817a8eccf68f2bdcad6
//routes
const { registerRoute } = require("./route/register");
const { loginRoute } = require("./route/login");
// const { ForgotRoute} = require("./route/forgetPassword")
// const { ResetPasswordRoute} = require("./route/reset-password")

// Route Middleware
app.use("/api", registerRoute);
app.use("/api", loginRoute);
// app.use("/api", ForgotRoute);
// app.use("/api", ResetPasswordRoute);

app.listen(4040, () => console.log("server is runing"));
