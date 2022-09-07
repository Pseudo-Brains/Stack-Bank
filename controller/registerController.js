const express = require("express");
const {loginValidation } = require("../module/validation")

const registerControllerPost = (req, res) => {
  const { error } = registerValidation(req.body);
};
