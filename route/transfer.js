const Route = require("express").Router();
const {Authtoken} = require("../middlewares/authUser")
const {AuthUserDetail} = require("../middlewares/AuthUserDetail")
const  {transfercontroller} = require("../controller/transfercontroller")



Route.post("/transfer",Authtoken, AuthUserDetail,transfercontroller)

module.exports ={
   transferRoute:Route
}



