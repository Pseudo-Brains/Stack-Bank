const express = require("express");

const registerControllerPost = (req, res) => {
  const { error } = registerValidation(req.body);
};

module.exports ={
  registerControllerPost: registerControllerPost
}