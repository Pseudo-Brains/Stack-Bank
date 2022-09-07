const route = require("express").Router();
 const {logIncontroller}=  require("../controller/logInController")
 
route.post("/login", registerControllerPost);

module.exports = {
  loginRoute: route,
};
