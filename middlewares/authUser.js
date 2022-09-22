
// const express = require("express");
// const jwt = require("jsonwebtoken")

<<<<<<< HEAD
//  module.exports= function(req,res,next) {
//     const token = req.header(token);
     
    
  
//     if (!token) return res.status(401).send({message:"user is not login try and login"})   
  
//         try {  
//          const verifiy = jwt.verify(token,process.env.TOKEN_SECRET)
//           req.user = verifiy
//            next()
//         } catch (error) {
//           return res.status(401).send("Invalid Token")
//           req.redirect("/api/login")
//         }
             
//   }
=======
  async function Authtoken (req,res,next) {
    const token = req.header("token");
    if (!token) return res.status(401).send({message:"user is not login try and login"});   
        try {  
         const verifiy = jwt.verify(token,process.env.TOKEN_SECRET);
          req.UserId = verifiy._id;
           next()
           return
        } catch (error) {
          return res.status(401).send("Invalid Token");
        }     
    }

module.exports ={
  Authtoken
}
>>>>>>> ad0642bcf0afdaf0a88ccf6901a56cec04e5aba2
