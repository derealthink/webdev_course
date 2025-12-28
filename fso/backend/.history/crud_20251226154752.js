const mongoose = require("mongooose");

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	points: Number,
})