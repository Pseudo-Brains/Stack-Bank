
const Route = require("express").Router()
const {Authtoken} = require("../middlewares/authUser")
const {AuthUserDetail} = require("../middlewares/AuthUserDetail")

const {pretransferController} = require("../controller/pretransferController")

Route.post("/pretransfer",Authtoken, AuthUserDetail,pretransferController)

module.exports ={
    pretransferRoute: Route
}

