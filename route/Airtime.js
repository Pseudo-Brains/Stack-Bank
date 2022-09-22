const Route = require("express").Router();

const {Authtoken} =require("../middlewares/authUser");

const {AuthUserDetail} =require("../middlewares/AuthUserDetail");

const {AirtimeController} = require("../controller/AirtimeController");




Route.post("/airtime",Authtoken,AuthUserDetail,AirtimeController);


module.exports={
    AirtimeRoute:Route
}