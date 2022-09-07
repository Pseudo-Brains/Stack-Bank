const route = require("express").Router();
const {registerControllerPost} = require("../controller/registerController")

route.post("/registe", registerControllerPost);

module.exports = {
  registerRoute: route,
};
