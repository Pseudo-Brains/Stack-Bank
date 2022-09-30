const { AccountDetails } = require("../models/user");
const { UserModel } = require("../models/userModel");
const crypto = require("crypto");
const { mailsender } = require("../models/sendMailFun");

async function loanController(req, res) {
  try {
    const UserId = req.UserData.id;
    const amount = req.body.amount;

    const LoanOwner = await UserModel.findById(UserId);

    const LoanOwerAccouDe = await AccountDetails.findById(LoanOwner._id);

    if (LoanOwerAccouDe.totalDeposit < Number(amount)) {
      return res
        .status(400)
        .send("YOUR loan should not be greater than your total deposit");
    }

    if (Number(amount) < 1) {
      return res.status(401).send("your amount can not be negative number");
    }

    res.send(200, "your loan request is being procssed");

    setTimeout(async () => {
      const loanAprove = await AccountDetails.updateOne(
        { _id: UserId },
        { balance: +amount },
        { new: true }
      );
      const transacID = crypto.randomBytes(32).toString("base64");
      const transactionsDetail = {
        enum: "loan",
        type: "loan",
        amount: amount,
        transactionID: transacID,
        senderName: senderNam,
        receiverName: receiverNam,
        balanceBefore: Number(LoanOwerAccouDe.balance),
        balanceAfter: Number(LoanOwerAccouDe.balance) + Number(amount),
        message: "This the loan that your requested for",
      };

      const transactionDone = await UserModel.updateOne(
        { _id: LoanOwner._id },
        { $push: { transactionsDetails: [transactionsDetail] } },
        { new: true, upsert: true }
      ).exec();

      await mailsender(
        LoanOwner.email,
        "Approved Load",
        `dear ${LoanOwner.firstname}`,
        `Your loan have being approved`,
        `The Amount is:${amount}`
      );

      res.send(200, "your loan is successfull approved");
      res.end();
    }, 6000);
  } catch (error) {
    resstatus.send(error);
  }
}

module.exports = {
  loanController,
};
