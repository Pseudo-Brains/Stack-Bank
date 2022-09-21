 const express = require("express")
 const {UserModel} = require("../models/user")
async function homeController(req,res) {

  const UserDetails = await UserModel.findById("6325df6842599deb9a65a47f").populate('accountDetails',"balance","totalDeposit"," totalWithdraw").populate('transactionsDetail').exec()

   console.log(UserDetails);
}

module.exports = {
 homeController
}