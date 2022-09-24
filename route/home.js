const Route = require("express").Router()
const {homeController} = require("../controller/homeController")
const {Authtoken} = require("../middlewares/authUser")

Route.get("/dashboard" , Authtoken, homeController);

module.exports = {
    dashboard: Route
}