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
    
    console.log(user);

   let token = ResetToken.findOne({
    userId:id,
    token:req.params.token
   });
   if (!token) return res.status(400).send({message:"invaild link"})

   res.status(200).send({message:"vaild url", id:id})
    
} catch (error) {
    res.status(500).send({message:error,id:user._id})
}})


Router.post("/reset-password/:id/:token", async (req,res)=>{    
    try {
      const id =  req.params.id
      const Ptoken = req.params.token

        const user = await UserModel.findById({_id:id})
    
        if(!user) return res.status(401).send({message:"invaild link"});

         let token = await ResetToken.findOne({
           userId:id,
           token: Ptoken
         });

         
         if (!token) return res.status(400).send({message:"invaild link"})
        
         
         if (token.verified)  token.verified = true
         
         console.log(req.body.password);
         const salt = await bcrypt.genSalt(10);
         console.log(token);
       const hashPassword = await bcrypt.hash(req.body.password,salt);

         console.log(hashPassword);

      // user.password = hashPassword
      //  await user.save()

      //  await UserModel.findById(id,(err,Puser)=>{
      //     if (err) return err
      //     Puser.set({password:hashPassword});
      //     Puser.save((err,doc)=>{
      //       console.log(doc);
      //       if (err) return err
      //       res.status(200).send({message: "reset is success"})
      //     })
      //   })

       await token.remove()

       res.status(200).send({message:"success"})
        
    } catch (error) {
        res.status(500).send({message:error})
    }})
    

    module.exports={
    ResetPasswordRoute: Router
    }