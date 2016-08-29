/*=====================================================
##################dependencies#########################
======================================================= */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//=====================================================
//##############Database connection####################
//=====================================================
mongoose.connect('mongodb://localhost/nytReact');
var db = mongoose.connection;

// show any mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

//bring in the models.
var Article = require('../models/articleSchema.js');

//=====================================================
//######################Routes#########################
//=====================================================

router.get('/', function(req,res){

});

router.get('/api/saved', function(req,res){

});

router.post('/api/saved', function(req, res){

});

router.delete('/api/saved', function(req, res){

});
