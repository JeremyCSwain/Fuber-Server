"use strict";


// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Truck = require('../models/truck_loc');
var TruckUser = require('../models/truck_user');

// Routes
Truck.methods(['get', 'put', 'post', 'delete']);
Truck.register(router, '/truck_loc');

TruckUser.methods(['get', 'put', 'post', 'delete']);
TruckUser.register(router, '/truck_user');

// Return Router
module.exports = router;












