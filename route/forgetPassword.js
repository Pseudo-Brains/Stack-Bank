const express = require("express")
const Router = require("express").Router();
const joi = require("joi")

const {mailsender} = require("../models/sendMailFun");

const crypto = require("crypto");
const {ResetToken,UserModel }  = require("../models/user")


Router.post("/forgot-password", async (req,res)=>{
  try {  
    
    const emailSchema = joi.object({
      email:joi.string().email().required()
    });
    
    const { error} = emailSchema.validate(req.body)
    if (error) return res.status(400).send({message:error.details[0].message});
      
    const user = await UserModel.findOne({ email: req.body.email});
     if (!user) return res.status(400).send({message:"User does not exist"});

    let token = await ResetToken.findOne({ userId: user._id });
    console.log(token);
    if (!token) {
            token = await new ResetToken({
            userId: user._id,
            token:crypto.randomBytes(20).toString("hex") 
        }).save()
    }
    
    const link =`${process.env.BASE_URL}/api/password-reset/${user._id}/${token.token}`
    
    console.log(link,user.email);
   
       //how the params on the mailsender emailTo,   subject,   message
       
     mailsender(user.email,"Reset your password",link).then(result=> console.log(result)).catch((error)=> console.log(error));

    res.status(200).send({message:"password reset link sent have being send to your email account"})

    } catch (error) {
     res.status(500).send({message: error})
 }
 }
);




module.exports = {
  ForgotRoute: Router
};


