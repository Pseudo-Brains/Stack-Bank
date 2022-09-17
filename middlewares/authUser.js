
const express = require("express");
const jwt = require("jsonwebtoken")

 module.exports= function(req,res,next) {
    const token = req.header("token");
    
    if (!token) return res.status(401).send({message:"user is not login try and login"})   
  
        try {  
         const verifiy = jwt.verify(token,process.env.TOKEN_SECRET)
          req.user = verifiy
           next()
        } catch (error) {
          return res.status(401).send("Invalid Token")
          req.redirect("/api/login")
        }
             
  }
