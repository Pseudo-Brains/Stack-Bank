const express = require("express")
const Router = require("express").Router();
const {forgotPasswordController} =require("../controller/forgotPasswordController")


Router.post("/forgot-password", forgotPasswordController);


module.exports = {
  ForgotRoute: Router
};


