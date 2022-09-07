const route = require("express").Router();

route.post("/register", registerControllerPost);

module.exports = {
  registerRoute: route,
};
