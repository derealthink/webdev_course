const mongoose = require("mongooose");

const userSchema = new mongoose.Schem({
	name: String,
	age: Number,
	email: String,
	points: Number,
})