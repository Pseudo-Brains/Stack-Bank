const express = require("express")
const joi = require("joi")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcrypt")
const {UserModel}= require("../module/module")
 const {loginValidation} = require("../module/validation")

const logIncontroller = async function (req, res)  {
    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password,
        };
   const { error}= loginValidation(loginData);

   if (error) return res.status(400).send(error.details);

   const User = await UserModel.findOne({ email: loginData.email });
    
   
   
   

         
        
    } catch (error) {
        console.log(error);
    }
}


module.exports= {
    logIncontroller: logIncontroller
}

