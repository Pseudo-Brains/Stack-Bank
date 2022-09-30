const express = require("express");
const { UserModel } = require("../models/user");
const { AccountDetails } = require("../models/accountDetail");

const { RegisterValidation } = require("../models/validation");
const bcrypt = require("bcrypt");
const { generateAccoNum } = require("../models/generateAccounNumber");
const crypto = require("crypto");
const { object } = require("joi");

const registerControllerPost = async (req, res) => {
  try {
    const { error } = RegisterValidation(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    const emailExist = await UserModel.findOne({ email: req.body.email });

    if (emailExist) return res.status(400).send("Email already exist😒😒");

    const phoneNoExist = await UserModel.findOne({ phone: req.body.phone });

    if (phoneNoExist) return res.status(400).send("Number already exist☑️☑️");

    const salt = await bcrypt.genSalt(10);

    const harshPassword = await bcrypt.hash(req.body.password, salt);

    const AccountNumber = await generateAccoNum();

    const user = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: harshPassword,
      phone: req.body.phone,
      dateOfBirth: req.body.dateOfBirth,
      accountnumber: AccountNumber,
      emailToken: crypto.randomBytes(64).toString("hex"),
      isVerfied: false,
    });
    const savedUser = await user.save(async (err, user) => {
      if (err) return err;
      AccountDetails.create(
        {
          userId: user._id,
          balance: 75000,
          totalDeposit: 75000,
        },
        async function (err, userDoc) {
          if (err) return err;
          await UserModel.findOneAndUpdate(
            { _id: user._id },
            { accountDetails: userDoc._id }
          );
          return "success";
        }
      );
      res.status(200).send({ message: "user is successful create" });
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  registerControllerPost,
};
