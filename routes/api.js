"use strict";


// Dependencies
var express = require('express');
var router = express.Router();

// Models
var User = require('../models/users');
var TruckLoc = require('../models/truck_loc');
var TruckProfile = require('../models/truck_profile');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

TruckLoc.methods(['get', 'put', 'post', 'delete']);
TruckLoc.register(router, '/truck_loc');

TruckProfile.methods(['get', 'put', 'post', 'delete']);
TruckProfile.register(router, '/truck_profile');

// Return Router
module.exports = router;












