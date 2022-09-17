const CryptoJS = require("crypto-js");

function EncryptUserInfo (UserData) {
  let data = CryptoJS.AES.encrypt(UserData,process.env.USER_INFO_SECRET).toString();
   return data
} 
const userData={
    email:"atozbasic@gmail.com",
    id:"q383grnryr923480494jt49-3jr3-0" 
  }

 const data= EncryptUserInfo(JSON.stringify(userData))
console.log(data);

 function DecryptUserInfo(data) {
    let bytes =  CryptoJS.AES.decrypt(data,process.env.USER_INFO_SECRET);
   const UserData = bytes.toString(CryptoJS.enc.Utf8);
   return UserData
 }

 const deData= DecryptUserInfo(data);

 console.log(deData);

 module.exports ={
    EncryptUserInfo,
    DecryptUserInfo
 }