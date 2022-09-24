 const express = require("express")
 const {UserModel} = require("../models/user")
async function homeController(req,res) {
  const id = req.UserId

  const UserDetails = await UserModel.findById(id).populate('accountDetails').exec()

   console.log(UserDetails);
   res.send(UserDetails)
}

module.exports = {
 homeController
}