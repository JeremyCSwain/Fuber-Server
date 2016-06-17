"use strict";


// Dependencies
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = cors = require('cors');

// MongoDB
mongoose.connect('mongodb://localhost/fuber');

// Express
var app = express();

// Enable CORS
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// User Endpoint
app.get('/api/users/', function(req, res) {
  User.findById(req.user, function(err, user) {
    res.send(user);
 	});
});

// Start Server
app.listen(3000);

console.log("API running on port 3000");