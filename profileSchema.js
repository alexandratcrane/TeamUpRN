const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		type: String,
		required: true
		
	},
	role: {
		type: String,
		required: true
		
	},	
	rank: {
		type: String,
		required: true
		
	},
	region: {
		type: String,
		required: true
		
	},
	
})

module.exports = User = mongoose.model('users', UserSchema);