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

// UserSchema

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    immutable: true,
  },
  updated_at: { type: Date },
});

//  account Details Schema

//  Schame middle wares

transactionSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const UserModel = model("User", UserSchema);

module.exports = { UserModel };
