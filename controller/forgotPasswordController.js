const express = require("express")
const joi = require("joi")
const jwt = require("jsonwebtoken")
const bcrypt= require("bcrypt")
const {UserModel} = require("../module/module")

const forgotPasswordController = async (req,res)=>{
   const userMail = req.body.email;
   try {  

   const oldUser = await UserModel.findOne({ email: userMail});

   if (!oldUser) return res.status(400).send("Email does not exist")
    

   const secret = process.env.JWT_SECRET + oldUser.password;
   const token = jwt.sign({email:oldUser.email,id:oldUser._id},secret,{expiresIn:"10m"}); 

   const link = `${process.env.PORTER}/reset-password/${oldUser._id}/${secret}`
} catch (error) {
    console.log(error);
}
}


module.exports ={
    forgotPasswordController:forgotPasswordController
}