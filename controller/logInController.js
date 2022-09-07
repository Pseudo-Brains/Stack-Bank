const express = require("express")
const joi = require("joi")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcrypt")
 const {loginValidation} = require("../module/validation")

const logIncontroller = async (req, res) => {
    try {

        const loginData = {
            email: req.body.email,
            password: req.body.password,
        };
   const { error}= logIncontroller(loginData)


         
        
    } catch (error) {
        console.log(error);
    }
}


module.export={
    logIncontroller:logIncontroller
}

