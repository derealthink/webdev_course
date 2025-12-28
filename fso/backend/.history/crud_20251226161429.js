const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	points: Number,
});

const User = mongoose.model('User', userSchema);

const Alba = new User({
	name: 'Alba',
	age: 16,
	email: 'a.chiavarini@gmail.com',
	points: 5,
})

await Alba.save();
