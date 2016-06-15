"use strict";


// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var truckUserSchema = new mongoose.Schema({
	truck_name: String, 
	cuisine: String, 
	contact_info: String,
	website_url: String 
});

// Return Model
module.exports = restful.model('TruckUser', truckUserSchema);