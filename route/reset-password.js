const express = require("express")
const Router = require("express").Router();
const joi = require("joi")

const {mailsender} = require("../models/sendMailFun");

const crypto = require("crypto");
const {ResetToken,UserModel }  = require("../models/user")




Router.get("/reset-password/:id/:token",async (req,res)=>{    
try {
  const id =  req.params.id
    const user = UserModel.findById({_id:id})

    if(!user) return res.status(401).send({message:"invaild link"});

   let token = ResetToken.findOne({
    userId:id,
    token:req.params.token
   });
   if (!token) return res.status(400).send({message:"invaild link"})

   res.status(200).send({message:"vaild url", id:id})
    
} catch (error) {
    res.status(500).send({message:error,id:user._id})
}})


Router.post("/reset-password/:id/:token",async (req,res)=>{    
    try {
      const id =  req.params.id
        const user = UserModel.findById({_id:id})
    
        if(!user) return res.status(401).send({message:"invaild link"});
       let token = ResetToken.findOne({
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
    

    module.exports={
    ResetPasswordRoute: Router
    }