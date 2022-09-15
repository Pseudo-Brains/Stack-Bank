
const express = require("express");
const { UserModel, } = require("../models/user");

const transferController = async function (req, res) {
  
  const Receiver = await UserModel.findOne({accountnumber:req.body.accountnumber})
   if(!Receiver) return res.status(400).send({meassage:"Account Number doesn't Exist"})
     
   const id = "6321e9a79b00e0ed56800920"
    // const user = sessionStorage.getItem("userIfon.Id");
    
    
    const user = UserModel.findOne({_id:id,email:email})
     UserModel.findByIdAndUpdate()
    
      
    // userId
    // balance
    // totalDeposit: 
    // totalWithdraw: 
    
    

    

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