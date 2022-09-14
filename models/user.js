const { date, number } = require("joi");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

//  transaction Schema

const transactionSchema = new Schema({
  transactionType: {
    type: String,
    enum: ["deposit", "transfer", "reversal", "withdrawal"],
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0.0,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  senderName: {
    type: String,
    required: true,
    trim: true,
  },
  receiverName: {
    type: String,
    required: true,
    trim: true,
  },
  balanceBefore: {
    type: mongoose.Decimal128,
    required: true,
  },
  balanceAfter: {
    type: mongoose.Decimal128,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

const accountDetailsSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  balance: {
    type: mongoose.Decimal128,
    required: true,
    trim: true,
    default: 0.0,
  },
  totalDeposit: {
    type: Number,
    required: true,
    default: 0.0,
  },
  totalWithdraw: {
    type: Number,
    required: true,
    default: 0.0,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
  },
});

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    min: 2,
  },
  lastName: {
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
  accountDetails: accountDetailsSchema,
  dateOfBirth: {
    type: Date,
    required: true,
  },
  accountnumber: {
    type: Number,
    unique: true,
    trim: true,
    min: 11,
    max: 12,
    immutable: true,
  },
  transactionsDetail: [transactionSchema],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
  },

  dateOfBirth: {
    type: Date,
    required: true,
  },
  accountNumber: {
    type: Number,
    unique: true,
    trim: true,
    min: 11,
    // max: 20,
    immutable: true,
  },
  accountDetails: accountDetailsSchema,
  transactionsDetail: [transactionSchema],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: new Date(),
  },
});

//  account Details Schema

//  Schema for reseting password
const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  verified: { type: Boolean, default: false },
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 600 },
});

//  Schame middle wares

transactionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

accountDetailsSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const UserModel = model("User", UserSchema);

const AccountDetails = model("AccountDetails", accountDetailsSchema);

const ResetToken = model("ResetToken", tokenSchema);

module.exports = { UserModel, AccountDetails, ResetToken };

// const UserModel = model("User", UserSchema);
