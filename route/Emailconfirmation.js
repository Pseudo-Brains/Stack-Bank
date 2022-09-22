const route = require("express").Router();
const {} = require("../controller/EmailConfirmController");

route.get("/api/auth/verify-user/:confirmationCode", verifyUser);

module.exports = {
  EmailCOnfirmRoute: route,
};
