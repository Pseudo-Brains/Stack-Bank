const Router = require("express").Router();

const express = require("express")
const joi = require("joi")
const jwt = require("jsonwebtoken");
const bcrypt= require("bcrypt");
const {UserModel} = require("../module/module");
const mailsender = require("../module/sendMailFun");
const crypto = require("crypto");

const {TokenForgot}  = require("../module/tokenForgot")
const module = require("../module/module");
const joi = require(Joi)

Router.post("/reset-password",async (req,res)=>{

    try {  
 
       const emailSchema = joi.object({
         email:joi.string().email().required()
       });
 
       const { error} = emailSchema().validate(req.body);
       if (error) return res.send({message:error.details[0].message});
      
    const oldUser = await UserModel.findOne({ email: userMail}); 
    
    if (!oldUser) return res.status(409).send("Email does not exist")
     

    let token = await TokenForgot.findById({userId:oldUser._id})

    if (!token) {
        token = await new TokenForgot({
            userId:oldUser._id,
            token:crypto.randomBytes(18).toString("hex") 
        }).save()
        
    }
 
   
    
      // const token = jwt.sign({id:oldUser._id},process.env.TOKEN_SECRET,{expiresIn:"10m"}); 
    const link =`${process.env.BASE_URL}/password-reset/${oldUser._id}/${TokenForgot.token}`
    
 //    (emailTo, bankEmail, subject, message)
    await mailsender("atozbasic@gmail.com","atozbasic@gmail.com", "Reset your password", link) 
    res.status(200).send({message:"password reset link sent have being send to your email account"})
 
 
    } catch (error) {
     res.status(500).send({message: error})
 }
 }
);



Router.get("/reset-password/:id/:token",async (req,res)=>{    
try {
  const id =  req.params.id
    const user = UserModel.findById({_id:id})

    if(!user) return res.status(401).send({message:"invaild link"});
   let token = TokenForgot.findOne({
    userId:id,
    token:req.params.token
   });
   if (!token) return res.status(400).send({message:"invaild link"})

   res.status(200).send({message:"vaild url",link:true})
    
} catch (error) {
    res.status(500).send({message:error,id:user._id})
}})


Router.post("/reset-password/:id/:token",async (req,res)=>{    
    try {
      const id =  req.params.id
        const user = UserModel.findById({_id:id})
    
        if(!user) return res.status(401).send({message:"invaild link"});
       let token = TokenForgot.findOne({
        userId:id,
        token:req.params.token
       });
       if (!token) return res.status(400).send({message:"invaild link"})

       if (!token.verified)  token.verified = true
        
       const salt = await bcrypt.genSalt(10);
       
       const hashPassword = await bcrypt.hash(req.body.password,salt)

       UserModel.password = hashPassword
       
       await UserModel.save()
       await token.remove()    
       res.status(200).send({message:"success"})
        
    } catch (error) {
        res.status(500).send({message:error})
    }})
    



