const { date, number } = require("joi");
const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

//  transaction Schema
// "deposit", "transfer", "reversal", "withdrawal"
const transactionSchema = new Schema({
  transactionType: {
    type: String,
    enum: ["credit", "debit", "loan", "airtime"],
    required: true,
  },
  type: String,
  amount: {
    type: Number,
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
    type: Number,
    required: true,
    trim: true,
    default: 0.0,
  },
  totalDeposit: {
    type: Number,
    default: 0.0,
  },
  totalWithdraw: {
    type: Number,
    default: 0.0,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    required: true,
    immutable: true,
  },
  updated_at: { type: Date },
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

const AccountDetails = model("AccountDetails", accountDetailsSchema);

const ResetToken = model("ResetToken", tokenSchema);

module.exports = { AccountDetails, ResetToken };
