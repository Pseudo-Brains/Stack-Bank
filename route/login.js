const route = require("express").Router();
 const {logIncontroller}=  require("../controller/logInController")

route.post("/login", logIncontroller);

module.exports = {
  loginRoute: route,
};
