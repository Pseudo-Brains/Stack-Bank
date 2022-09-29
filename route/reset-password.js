const express = require("express");
const Router = require("express").Router();
const joi = require("joi");
const {resetPasswordController} = require("../controller/resetPasswordController")

// Router.get("/reset-password/:id/:token",async (req,res)=>{
// try {
//   const id =  req.params.id.toString()
//     const user = UserModel.findOne({_id:id})

//     if(!user) return res.status(401).send({message:"invaild link"});

//     let token = ResetToken.findOne({
//       userId:req.params.id,
//       token:req.params.token
//     });
//     console.log(token);
//     if (!token) return res.status(400).send({message:"invaild link"})

//    res.status(200).send({message:"vaild url", id:id})

// } catch (error) {
//     res.status(500).send({message:error,id:user._id})
// }})

Router.post("/reset-password/:id/:token",resetPasswordController);

    module.exports={
    ResetPasswordRoute: Router
    }
