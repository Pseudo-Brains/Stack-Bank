const express = require("express")
const {SendMSG} = require("../models/sendSMS")

async function AirtimeController() {

    try {
        const UserId = req.UserData.id;
        const {amount , receiverNumber} = req.body;
      
        const AirtimeSender = await UserModel.findById(UserId);
         
       const AirtimeSenderDet = await AccountDetails.findById(LoanOwner._id)
      
         if (AirtimeSenderDet.balance < Number(amount)) { 
          return res.status(400).send("YOUR loan should not be greater than your total deposit")
         }
      
         if (Number(amount) < 1) {
          return res.status(401).send("your amount can not be negative number")
         }
        
      
       const loanAprove = await AccountDetails.updateOne({_id:UserId},{balance:-amount},{new:true})
          const transacID= crypto.randomBytes(32).toString("base64")
           const transactionsDetail={
          enum: "airtime",
          type: "airtime",
          amount: amount,
          transactionID:transacID,
          senderName: AirtimeSender.firstname,
          receiverName: receiverNumber,
          balanceBefore:Number(LoanOwerAccouDe.balance),
          balanceAfter:Number(LoanOwerAccouDe.balance)-Number(amount),
          message:"you bought Airtime"
        }
       
     const transactionDone = await UserModel.updateOne({_id:AirtimeSender._id},{ $push: {transactionsDetails:[transactionsDetail]}},{new:true,upsert:true}).exec()
     
     SendMSG(`airtime is send to you by ${AirtimeSender.firstname}`,receiverNumber)    
     return res.status(200).send("success")
    
}catch(error){
    console.log(error);
}
}

module.exports={
    AirtimeController
}
