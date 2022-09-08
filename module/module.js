const { number } = require("joi");
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 6,
    max: 25,
    mongooseOptions: { sparse: true },
    trim: false,
  },
  lastname: {
    type: String,
    required: true,
    min: 6,
    max: 25,
    trim: false,
  },
  password: {
    type: String,
    // required: true,
    max: 24,
    min: 6,
    trim: false,
  },
  email: {
    type: String,
    // required: true,
    max: 30,
    min: 6,
    unique: true,
    trim: false,
  },
  phone: {
    type: Number,
    // required: true,
    // max: 20,
    min: 11,
    unique: true,
    trim: false,
  },
  // accountNumber: {
  //   type: String,
  //   max: 14,
  //   min: 6,
  //   unique: true,
  //   required: false,
  // },
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
  UserModel: mongoose.model("User", UserSchema),
};
