//import module
var mongoose = require('mongoose');
var schema = require('mongoose').Schema;
var ObjectID = require('mongodb').ObjectID;
var Q = require('q');
var _ = require('lodash');
var mongoClient = require('mongodb').MongoClient;
var BSON = mongoClient.BSONPure;

var adminSchema = schema({
    login:{
        type: String,
        required : true
    },
    password:{
        type:String,
        require:true
    }

    
});
module.exports=mongoose.model('admin', adminSchema);