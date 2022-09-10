const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "user",
		unique: true,
	},
    verified: { type: Boolean, default: false },
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 600},
});

module.exports ={TokenForgot: mongoose.model("TokenForget", tokenSchema)}
