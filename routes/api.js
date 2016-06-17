"use strict";


// Dependencies
var express = require('express');
var router = express.Router();

// Models
var User = require('../models/users');
var TruckUser = require('../models/truck_user');

// Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

TruckUser.methods(['get', 'put', 'post', 'delete']);
TruckUser.register(router, '/truck_user');

// Return Router
module.exports = router;












