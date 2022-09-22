const Route = require("express").Router()
const {loanController} = require("../controller/loanController")
const {AuthUserDetail} = require("../middlewares/AuthUserDetail")
const {Authtoken} =require("../middlewares/authUser")


Route.post("/loan",Authtoken, AuthUserDetail,loanController);


module.exports = {
  LoanRoute : Route
}


