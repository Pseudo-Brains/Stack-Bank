const express = require("express");
const mongoose = require("mongoose");
const { credit, debit } = require("../models/credit&debitFUN");
const { UserModel, AccountDetails } = require("../models/user");
const crypto = require("crypto");

const transfercontroller = async (req, res) => {
  const session = await mongoose.startSession();

  await session.startTransaction();

  try {
    const transacID = crypto.randomBytes(32).toString("hex");

    const { id } = req.UserData;

    const { accountnumber, message, account } = req.body;

    const transactionStatus = await Promise.all([
      debit(account, message, accountnumber, id, transacID, session),
      credit(account, message, accountnumber, id, transacID, session),
    ]);

    const trancactFailed = transactionStatus.filter(
      (transac) => transac.status !== true
    );

    if (trancactFailed.length) {
      const errorMsg = trancactFailed.map((err) => err.message);
      await session.abortTransaction();
      //  return res.send(errorMsg)
      return res
        .status(200)
        .send({ message: "transaction feild", errMsg: errorMsg });
    }
    await session.commitTransaction();
    session.endSession();
    return res.status(200).send("successful transfer");
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    return res.status(500).send("internet error");
  }
};
module.exports = {
  transfercontroller,
};

//  import axios from 'axios'
//  params = {'HTTP_CONTENT_LANGUAGE': self.language}
//  headers = {'header1': value}
//  axios.post(url, params, headers)
//  Is this correct? Or should I do:

//  axios.post(url, params: params, headers: headers)
