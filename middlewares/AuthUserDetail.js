const {DecryptUserInfo} = require("../util/encrypt")
const {UserModel}  = require("../models/user")

 async function AuthUserDetail(req,res,next) {
     const userDetail= DecryptUserInfo(req.header("SecUSerInfo"))
     
     try {
       const user = JSON.parse(userDetail)
       console.log(user);
       await UserModel.findById(user.id.toString())
         console.log(user);
          req.userDeta = user
          next()
     } catch (error) {
         return res.status(400).send("user do not exist")
     }
}
module.exports ={
  AuthUserDetail
}




