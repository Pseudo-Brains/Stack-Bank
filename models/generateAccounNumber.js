<<<<<<< HEAD
const { UserModel } = require("../models/user");
=======

const  {UserModel}  = require("../models/user")
>>>>>>> ad0642bcf0afdaf0a88ccf6901a56cec04e5aba2

// test data

// let useData = [65782556139,41178855357,71324565557,87735695034,31982444255,23310663125,11666111560,24445592087,31740758610,34910733919,52839248817,27750686746,52056704112,76027423034,15970533774,23352887938,97786253772,43437498233,87183167749,34541753044]

async function generateAccoNum() {
  let AccountNum = null;
  do {
    const nums = new Set();
    while (nums.size < 7) {
      nums.add(Math.floor(Math.random() * 80) + 11);
    }
<<<<<<< HEAD

    let TempAccNum = Number(
      [...nums].join("").split("").splice(0, 11).join("")
    );

    // test data
    // AccountNum = useData.find((item)=> item === TempAccNum)
    AccountNum = await UserModel.findOne({ accountnumber: TempAccNum });
    if (!AccountNum) {
      return TempAccNum;
    }
=======
   let TempAccNum =  Number([...nums].join("").split("").splice(0,11).join(""));    
        // test data
      // AccountNum = useData.find((item)=> item === TempAccNum)
         AccountNum = await UserModel.findOne({accountnumber:TempAccNum})
      if (!AccountNum){
        return TempAccNum
       }
>>>>>>> ad0642bcf0afdaf0a88ccf6901a56cec04e5aba2
  } while (AccountNum);
}

module.exports = {
  generateAccoNum,
};
