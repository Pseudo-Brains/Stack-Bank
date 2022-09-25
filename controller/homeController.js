
const express = require("express")
 const {UserModel,AccountDetails} = require("../models/user")
async function homeController(req,res) {
   try { 
    const id = req.UserId

    const UserDetails = await UserModel.findById(id).populate('accountDetails').exec()
    const mainAccountDetails = await AccountDetails.findOne({userId:id})

     res.status(200).send({firstname:UserDetails.firstname,lastname: UserDetails.lastname,accountnumber:UserDetails.accountnumber,phone:UserDetails.phone,accountDetails:UserDetails.transactionsDetails,balance:mainAccountDetails.balance, totalDeposit:mainAccountDetails.totalDeposit,totalWithdraw:mainAccountDetails.totalWithdraw})
   } catch (error) {
    res.status(400).send("someThing went wrong")
   }
}

module.exports = {
 homeController
}