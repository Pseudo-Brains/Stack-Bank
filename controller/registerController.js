// const express = require("express");
const { UserModel } = require("../models/user");
const { RegisterValidation } = require("../models/validation");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const registerControllerPost = async (req, res) => {
  // req.send("gdhkj,m")
  const { error } = RegisterValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const salt = await bcrypt.genSalt(10);
  const harshPassword = await bcrypt.hash(req.body.password, salt);

  const emailExist = await UserModel.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exist😒😒");

  const phoneNoExist = await UserModel.findOne({ phone: req.body.phone });
  if (phoneNoExist) return res.status(400).send("Number already exist☑️☑️");

  const user = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: harshPassword,
    phone: req.body.phone,
    dateOfBirth: req.body.dateOfBirth,
    accountnumber: req.body.accountNumber,
    emailToken: crypto.randomBytes(64).toString("hex"),
    isVerfied: false,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  registerControllerPost: registerControllerPost,
};

// const user = new UserModel({
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//     password: req.body.password,
//   });
//   try {
//     const savedUser = await user.save();
//     res.send(savedUser);
//   } catch (err) {
//     res.status(400).send(err);
//   }
