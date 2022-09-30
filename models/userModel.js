const { date, number } = require("joi");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    min: 2,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    min: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    min: 6,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 25,
  },
  phone: {
    type: Number,
    min: 11,
    unique: true,
    trim: true,
  },
  accountDetails: {
    type: Schema.Types.ObjectId,
    ref: "AccountDetails",
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  emailToken: {
    type: String,
    required: true,
  },
  accountnumber: {
    type: Number,
    unique: true,
    min: 11,
    immutable: true,
  },
  transactionsDetails: [transactionSchema],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
