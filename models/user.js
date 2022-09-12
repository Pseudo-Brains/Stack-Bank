const { date, number } = require("joi")
const mongoose  = require("mongoose")
const {Schema, Model} = require("mongoose")

const UserSchema = new Schema({
    firstName: {
         type: String,
         required: true,
         trim: true,
         min:2
    },
	lastName: {
         type: String,
         required: true ,
         trim: true,
         min: 2
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
          max:25
         },
     phone: {
            type: Number,
            min: 11,
            unique: true,
            trim: true,
          },
          
    dateOfBirth:{
        type: date,
        required:true
    },
    accountNumber:{
     type:number,
     unique:true,
     trim:true,
     min:11,
     max:12,
     immutable: true
    },
    accountDetails:{
      type: mongoose.Schema.Types.ObjectId,
      required:true,
      ref: "AccountDetails",
      unique: true,
    },
    transactionsDetail:[transaction],
    createdAt: {
        type: Date,
        default: ()=> Date.now()
    },
    updatedAt:{
        type: Date,
        required: true
    }

})


//  account Details Schema 

const accountDetailsSchema = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User"
    },
    balance: {
        type: Schema.Types.Decimal128,
        required:true,
        trim:true
    },
    totalDeposit:{
        type:number,
        required:true
    },
    totalWithdraw:{
        type:number,
        required:true
    },
    createdAt: {
        type: Date,
        default: ()=> Date.now()
    },
    updatedAt:{
        type: Date,
        required: true
    }
})

//  transaction Schema

const transactionSchema = Schema({

    transactionType:{
        type: String,
        enum : ['deposit', 'transfer', 'reversal', 'withdrawal'],
        required: true
      },
      amount: {
        type: mongoose.Decimal128,
        required: true,
        default: 0.00
      },
      accountNumber: {
        type: number,
        ref: 'AccountDetails'
      },
      balanceBefore: {
        type: mongoose.Decimal128,
        required: true,
      },
      balanceAfter: {
        type: mongoose.Decimal128,
        required: true,
      },
      message: { type: String, required: true },
  
      createdAt: {
        type: Date,
        default: ()=> Date.now()
    },
    updatedAt:{
        type: Date,
        required: true
    }

})


//  Schema for reseting password 
const tokenSchema = new Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
		unique: true,
	},
    verified: { type: Boolean, default: false },
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 600},
});




//  Schame middle wares

transactionSchema.pre("save",function (next) {
    this.updatedAt= Date.now()
    next()   
}) 

accountDetailsSchema.pre("save",function (next) {
    this.updatedAt= Date.now()
    next()   
}) 

UserSchema.pre("save",function(next){
    this.updatedAt= Date.now()
    next()
})

const User = Model("User",UserSchema)
const AccountDetails = Model("AccountDetails",accountDetailsSchema)


const ResetToken = Model("ResetToken",tokenSchema)

module.exports ={User,AccountDetails,ResetToken}
