const { date, number } = require("joi");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

//  transaction Schema
// "deposit", "transfer", "reversal", "withdrawal"
const transactionSchema = new Schema({
  transactionType: {
    type: String,
    enum: ["credit","debit","loan","airtime"],
    required: true,
  },
  type: String,
  amount: {
    type: mongoose.Decimal128,
    required: true,
    default: 0.0,
  },
  transactionID: {
    type: String,
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
    default: 0.0,
  },
  totalDeposit: {
    type: mongoose.Decimal128,
    default: 0.00,
    trim:true
  },

  totalWithdraw: {
    type: mongoose.Decimal128,
    trim:true,
    default: 0.00
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    required:true,
    immutable:true
  },
  updated_at:{ type: Date }
});

// UserSchema

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

//  account Details Schema

//  Schema for reseting password
const tokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
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


