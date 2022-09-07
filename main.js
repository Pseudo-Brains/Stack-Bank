const express = require("express");
const app = express();

//routes
const registerRoute = require("./route/register");

// Route Middleware
app.use("/api", registerRoute);

app.listen(4040, () => console.log("server is runing"));
