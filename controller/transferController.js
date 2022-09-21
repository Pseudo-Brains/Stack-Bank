<<<<<<< HEAD
// const express = require("express");
// const { UserModel, } = require("../models/user");

// const transferController = async function (req, res) {

//   const Receiver = await UserModel.findOne({accountnumber:req.body.accountnumber})
//    if(!Receiver) return res.status(400).send({meassage:"Account Number doesn't Exist"})

//    const id = "6321e9a79b00e0ed56800920"
//     // const user = sessionStorage.getItem("userIfon.Id");

//     const user = UserModel.findOne({_id:id,email:email})
//      UserModel.findByIdAndUpdate()

//     // userId
//     // balance
//     // totalDeposit:
//     // totalWithdraw:

//   //  const sender = await UserModel(req.body.)

//   //  import axios from 'axios'
//   //  params = {'HTTP_CONTENT_LANGUAGE': self.language}
//   //  headers = {'header1': value}
//   //  axios.post(url, params, headers)
//   //  Is this correct? Or should I do:

//   //  axios.post(url, params: params, headers: headers)

//         // transactionType: t
//         // amount
//         // accountnumber:
//         // senderName:
//         // receiverName:
//         // balanceBefore:
//         // balanceAfter
//         // message:

// }
=======
const express = require("express");
const  mongoose  = require("mongoose");
const {credit,debit} = require("../models/credit&debitFUN")
const {UserModel,AccountDetails} = require("../models/user")
const crypto = require("crypto")

const transfercontroller = async (req, res)=>{

      const transacID = crypto.randomBytes(32).toString('hex');
      const {id} = req.UserData;
      const {accountnumber, message , account} = req.body;

  const result = debit(account,message,accountnumber,id,transacID,session=null);

    console.log(result);

    // const session = await mongoose.startSession();

    //  await session.startTransaction()

    // try {
  
    //  const transacID = crypto.randomBytes(32).toString('hex');
    //   const {id} = req.UserData;
    //   const {accountnumber, message , account} = req.body;
    //         const transactionStatus = await Promise.all([
    //             debit(account,message,accountnumber,id,transacID,session),
    //             credit(account,message,accountnumber,id,transacID,session )
    //         ])  

    //   const  trancactFailed = transactionStatus.filter((transac)=> transac.status !== true)

    //     console.log(trancactFailed);

    //     if(trancactFailed.length){

    //      const errorMsg = trancactFailed.map((err)=> err.message);

    //      await session.abortTransaction();
          
    //     //  return res.send(errorMsg)
    //     console.log(errorMsg);
    //     return
    //     }
        
    //    await session.commitTransaction();
    //     session.endSession()
    //     // res.send("success")
    //     console.log("success");
    //     return
    //     } catch (error) {
    //         await session.commitTransaction();
    //             session.endSession();
    //             console.log(error);
    //             return
    //         }

}
module.exports ={
    transfercontroller
}


   //  import axios from 'axios'
  //  params = {'HTTP_CONTENT_LANGUAGE': self.language}
  //  headers = {'header1': value}
  //  axios.post(url, params, headers)
  //  Is this correct? Or should I do:
   
  //  axios.post(url, params: params, headers: headers)
>>>>>>> ad0642bcf0afdaf0a88ccf6901a56cec04e5aba2
