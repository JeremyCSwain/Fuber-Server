"use strict";


// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	uid: String, 
	email: String, 
	username: String,
	is_truck: Boolean 
});

// Return Model
module.exports = restful.model('User', userSchema);