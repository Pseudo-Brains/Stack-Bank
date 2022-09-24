const Route = require("express").Router()

const {logoutController} = require("../controller/LogoutController")

const {AuthUserDetail} = require("../middlewares/AuthUserDetail")
const {Authtoken} =require("../middlewares/authUser")

Route.get("/logout",Authtoken,AuthUserDetail, logoutController )


module.exports ={
    LogoutRoute:Route
}


