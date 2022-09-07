const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  LastName: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  Password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  Email: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
    unique: true,
  },
  Phone: {
    type: String,
    required: true,
    max: 100,
    min: 11,
    unique: true,
  },
  AccountNumber: {
    type: String,
    required: true,
    max: 1024,
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
  UserModel: mongoose.model("User", UserSchema),
};
