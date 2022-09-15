const express = require("express")
const Router = require("express").Router();
const joi = require("joi")
const {mailsender} = require("../models/sendMailFun");
const bcrypt = require("bcrypt")
const crypto = require("crypto");
const {ResetToken,UserModel }  = require("../models/user")




Router.get("/reset-password/:id/:token",async (req,res)=>{    
try {
  const id =  req.params.id.toString()
    const user = UserModel.findOne({_id:id})

    if(!user) return res.status(401).send({message:"invaild link"});
    
    
    let token = ResetToken.findOne({
      userId:req.params.id,
      token:req.params.token
    });
    console.log(token);
    if (!token) return res.status(400).send({message:"invaild link"})

   res.status(200).send({message:"vaild url", id:id})
    
} catch (error) {
    res.status(500).send({message:error,id:user._id})
}})


Router.post("/reset-password/:id/:token", async (req,res)=>{    
    try {
<<<<<<< HEAD
      const id =  req.params.id
      const Ptoken = req.params.token
      
      const user = await UserModel.findById(req.params.id)
=======
      const id =  req.params.id.toString()
      const Ptoken = req.params.token.toString()
      
      const user = await UserModel.findOne({_id: id})
>>>>>>> f4fc648169b94823e0bf8817a8eccf68f2bdcad6
      if(!user) return res.status(401).send({message:"invaild link"});
      console.log("transaction");
        
        let token = await ResetToken.findOne({
<<<<<<< HEAD
          userId:req.params.id,
          token: req.params.token
=======
          userId: id,
          token: Ptoken
>>>>>>> f4fc648169b94823e0bf8817a8eccf68f2bdcad6
        });
        // console.log(token);
        
        

<<<<<<< HEAD
        if (!token.token) return res.status(400).send({message:"invaild link"})
        
        if (!token.verified)  token.verified = true 
=======
        if (!token) return res.status(400).send({message:"invaild link"})
        
        // if (!token.verified)  token.verified = true 
>>>>>>> f4fc648169b94823e0bf8817a8eccf68f2bdcad6
        
        // const PasswordSchema = joi.object({
        //   email:joi.string().password().min(6).required()
        // });
        
        // const { error} = PasswordSchema.validate({user.password})
        
        // if (error) return res.status(400).send({message:error.details[0].message});
        
        
        const salt = await bcrypt.genSalt(10);
        
<<<<<<< HEAD
        // console.log(req.body.password);
        
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        
        console.log(hashPassword);
        
        // user.password = hashPassword
        // await user.save()
        
        
        
 
        
        return  console.log(salt,hashPassword);
      //  await token.remove()

       res.status(200).send({message:"success"})  
    } catch (error) {
=======
        
        const hashPassword = await bcrypt.hash(req.body.password,salt);
        
        await UserModel.findOneAndUpdate({_id: id},{password: hashPassword})
              
          //  user.password = hashPassword;
          //  await user.save()      
        
         console.log("data111111111");

         await ResetToken.findOneAndDelete({token: token.tokens})
        
        res.status(200).send({message:"success"})  
      } catch (error) {
>>>>>>> f4fc648169b94823e0bf8817a8eccf68f2bdcad6
        res.status(500).send({message:error})
      }})
      

    module.exports={
    ResetPasswordRoute: Router
    }