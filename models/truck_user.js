"use strict";


// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var truckUserSchema = new mongoose.Schema({
	lat: Number, 
	long: Number,
	truck_name: String, 
	contact_info: String,
	cuisine: String, 
	website_url: String 
});

// Return Model
module.exports = restful.model('TruckUser', truckUserSchema);