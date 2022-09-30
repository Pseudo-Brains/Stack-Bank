const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// mongoose.connect("mongodb://localhost/StackDB", () =>
//   console.log("connected to StackDB")
// );

//  const atlasDB = `mongodb+srv://pseudobrains:test12345@cluster0.xo0lnsr.mongodb.net/stackDB?retryWrites=true&w=majority`;

// mongoose.connect(atlasDB,{
//    useNewUrlParser:true,
//   useNewUrlParser: true,
//   useCreateIndex:true,
//   useUnifiedTopology:true,
//   useFindAndModify:false
// }

mongoose
  .connect(process.env.DB_ATLAS_LINK)
  .then(() => console.log("DB Connection Success"))
  .catch((err) => console.log(err));
const { ResetPasswordRoute } = require("./route/reset-password");
const { transferRoute } = require("./route/transfer");
const { AppMain } = require("./route/home");
const { LoanRoute } = require("./route/loan");
const { ForgotRoute } = require("./route/forgetPassword");
const { ResetPasswordRoute } = require("./route/reset-password");
const { pretransferRoute } = require("./route/pretransfer");
const { transferRoute } = require("./route/transfer");
const { dashboard } = require("./route/home");
const { LoanRoute } = require("./route/loan");
const { AirtimeRoute } = require("./route/Airtime");
const { LogoutRoute } = require("./route/logout");

// Route Middleware
app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", ForgotRoute);
app.use("/api", ResetPasswordRoute);
