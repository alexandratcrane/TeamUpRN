const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	ign: String,
	role: String
});

const User = mongoose.model("user", UserSchema);

//export
module.exports = User;

