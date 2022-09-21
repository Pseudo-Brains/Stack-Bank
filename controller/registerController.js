// const express = require("express");
const { UserModel } = require("../models/user");
const { RegisterValidation } = require("../models/validation");
const bcrypt = require("bcrypt");
const { generateAccoNum } = require("../models/generateAccounNumber");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { mailsender } = require("../models/sendMailFun");

const registerControllerPost = async (req, res) => {
  // req.send("gdhkj,m")
  const { error } = RegisterValidation(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  // const salt = await bcrypt.genSalt(10);
  // const harshPassword = await bcrypt.hash(req.body.password, salt);

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

  const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET);

  await user.save((err) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(200).json({
      _id: user.id,
      token,
    });
    const link = `${process.env.BASE_URL}/api/verify-password/${user.emailToken}`;

    mailsender(req.body.email, "Reset your password", link)
      .then((result) =>
        res.status(200).send({
          message:
            "password reset link sent have being send to your email account",
          result,
        })
      )
      .catch((error) => console.log(error));
  });
};

module.exports = {
  registerControllerPost: registerControllerPost,
};

// try {
// } catch (err) {
//   res.status(400).send(err);
// }
