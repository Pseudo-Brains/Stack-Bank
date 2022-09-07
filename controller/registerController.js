// const express = require("express");
const { UserModel } = require("../module/module");

const registerControllerPost = async (req, res) => {
  //   const { error } = registerValidation(req.body);
  const user = new UserModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
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
