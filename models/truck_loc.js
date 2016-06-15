"use strict";


// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var truckLocSchema = new mongoose.Schema({
	lat: Number,
	long: Number 
});

// Return Model
module.exports = restful.model('TruckLoc', truckLocSchema);