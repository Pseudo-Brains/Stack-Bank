const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect("mongodb://localhost/StackDB", () =>
  console.log("connected to StackDB")
);
//   const passwordAtlas = "test12345"
//  const atlasDB = `mongodb+srv://pseudobrains:${passwordAtlas}@cluster0.xo0lnsr.mongodb.net/stackDB?retryWrites=true&w=majority`;

// mongoose.connect(atlasDB,{
//    useNewUrlParser:true,
//   useNewUrlParser: true,
//   useCreateIndex:true,
//   useUnifiedTopology:true,
//   useFindAndModify:false
// }

// mongoose
//   .connect(atlasDB)
//   .then(() => console.log("DB Connection Success"))
//   .catch((err) => console.log(err));

// use area
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const { registerRoute } = require("./route/register");
const { loginRoute } = require("./route/login");
const { ForgotRoute } = require("./route/forgetPassword");
const { ResetPasswordRoute } = require("./route/reset-password");
const { pretransferRoute } = require("./route/pretransfer");
const { transferRoute } = require("./route/transfer");
const { AppMain } = require("./route/home");
const { LoanRoute } = require("./route/loan");
const { AirtimeRoute } = require("./route/Airtime");

// Route Middleware
app.use("/api", registerRoute);
app.use("/api", loginRoute);
app.use("/api", ForgotRoute);
app.use("/api", ResetPasswordRoute);
app.use("/api", pretransferRoute);
app.use("/api", AppMain);
app.use("/api", transferRoute);
app.use("/api", LoanRoute);
app.use("/api", AirtimeRoute);

app.listen(4040, () => console.log("server is runing"));
