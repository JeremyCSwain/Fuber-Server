"use strict";


// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var truckProfileSchema = new mongoose.Schema({
	truck_name: String, 
	contact_info: String,
	cuisine: String, 
	website_url: String 
});

// Return Model
module.exports = restful.model('TruckProfile', truckProfileSchema);