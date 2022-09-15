const express = require("express")
const joi = require("joi")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcrypt")
const {UserModel}= require("../models/user")
 const {loginValidation} = require("../models/validation")
 const crypto = require("crypto")
const login = require("../route/login")

const logIncontroller = async function (req, res) {
    
  // const salt = await bcrypt.genSalt(10);
  // const hashPassword = await bcrypt.hash("test1234", salt);



  // const user = new UserModel({
  //   // firstname: req.body.firstname,
  //   // lastname: req.body.lastname,
  //   // password: harshPassword,
  //   // email: req.body.email,
  //   // phone: req.body.phone,
  //   // accountNumber: req.body.accountNumber,

  //   firstname:"arinze",
  //   lastname:"ogbechi",
  //   email:"arinze6@gmail.com",
  //   password: hashPassword,
  //   phone:"0982892826892"
  // });
 
    // const savedUser = await user.save();
    // console.log(savedUser);

  

    try {
        const loginData = {
            email: req.body.email,
            password: req.body.password,
        };
    const {error}= loginValidation(loginData);

      if (error) return res.status(400).send(error.details);
         console.log(error);
     const User = await UserModel.findOne({ email: loginData.email });
      
     if (!User) return res.status(400).send("wrong email try angin");
            
      const correctPassword = await bcrypt.compare(loginData.password,User.password)    
        if (!correctPassword) return res.status(400).send("wrong password try angin");
     
      const token = jwt.sign({_id:User.id}, process.env.TOKEN_SECRET)
           
      await UserModel.updateOne({email:loginData.email},{token:token});

      return res.status(200).send({token:token,id:User._id,name:User.lastName,email:User.email})   
    } catch (error) {
      return res.status(200).send(error)
    }
}
module.exports= {
    logIncontroller
}

