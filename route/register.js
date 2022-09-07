const route = require("express").Router();
const {registerControllerPost} = require("../controller/registerController")

route.post("/register", registerControllerPost);

module.exports = {
  registerRoute: route,
};
