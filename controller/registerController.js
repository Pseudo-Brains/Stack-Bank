const express = require("express");

const registerControllerPost = (req, res) => {
  const { error } = registerValidation(req.body);
};
