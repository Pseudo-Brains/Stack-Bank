const Route = require("express").Router()
const {homeController} = require("../controller/homeController")
const {Authtoken} = require("../middlewares/authUser")

Route.get("/appmain" , Authtoken, homeController);

module.exports = {
    AppMain: Route
}