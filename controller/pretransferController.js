
const express = require("express");
const { UserModel, } = require("../models/user");

const pretransferController = async function (req, res) {

  console.log(req.UserData);
  console.log(req.body.accountnumber);
  const Receiver = await UserModel.findOne({accountnumber:req.body.accountnumber})
   if(!Receiver) return res.status(400).send({meassage:"Account Number doesn't Exist"})


    
   res.status(200).send({firstname:Receiver.firstname,lastname:Receiver.lastname,accountnumber:Receiver.accountnumber})
   return


      
    
}

module.exports ={
 pretransferController
}