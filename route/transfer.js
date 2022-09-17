
const Route = require("express").Router()

const {transferController} = require("../controller/transferController")

Route.post("/transfer",transferController)

module.exports ={
    transferRoute: Route
}

