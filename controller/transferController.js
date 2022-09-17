
const express = require("express");
const { UserModel, } = require("../models/user");

const transferController = async function (req, res) {
  // console.log(req.body);
  // console.log(req.header("id"));
  // console.log(req.header("token"));
  // console.log(req.header("email"));
  console.log(req.headers.email);
  console.log(req.body.accountnumber);
  const Receiver = await UserModel.findOne({accountnumber:req.body.accountnumber})
   if(!Receiver) return res.status(400).send({meassage:"Account Number doesn't Exist"})

   console.log(Receiver);
  
      // userId
    // balance
    // totalDeposit: 
    // totalWithdraw: 
       
  

  //  const id = req.query.id
  //  const email = req.g
    
    
  

    
    
      
 
    

  //  const sender = await UserModel(req.body.)

     

  //  import axios from 'axios'
  //  params = {'HTTP_CONTENT_LANGUAGE': self.language}
  //  headers = {'header1': value}
  //  axios.post(url, params, headers)
  //  Is this correct? Or should I do:
   
  //  axios.post(url, params: params, headers: headers)


        // transactionType: t
        // amount
        // accountnumber:
        // senderName: 
        // receiverName:
        // balanceBefore:      
        // balanceAfter
        // message:

      
    
}

module.exports ={
  transferController
}