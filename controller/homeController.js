const { UserModel } = require("../models/userModel");
async function homeController(req, res) {
  const id = req.UserId;

  const UserDetails = await UserModel.findById(id)
    .populate("accountDetails")
    .exec();

  console.log(UserDetails);
}

module.exports = {
  homeController,
};
