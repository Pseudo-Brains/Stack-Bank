
const Route = require("express").Router()
const {AuthUserDetail} = require("../middlewares/AuthUserDetail")

const {transferController} = require("../controller/transferController")

Route.post("/transfer",transferController)

module.exports ={
    transferRoute: Route
}

