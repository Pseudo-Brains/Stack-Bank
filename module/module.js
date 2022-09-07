const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  lastName: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  password: {
    type: String,
    required: true,
    max: 24,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 30,
    min: 6,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    max: 20,
    min: 11,
    unique: true,
  },
  accountNumber: {
    type: String,
    max: 14,
    min: 6,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = {
  UserModel: mongoose.model("UserModule", UserSchema),
};
