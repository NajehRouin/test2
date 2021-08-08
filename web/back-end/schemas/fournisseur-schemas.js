//import module
var mongoose = require('mongoose');
var schema = require('mongoose').Schema;
var ObjectID = require('mongodb').ObjectID;
var Q = require('q');
var _ = require('lodash');
var mongoClient = require('mongodb').MongoClient;
var BSON = mongoClient.BSONPure;

var fournisseurSchema = schema({
    nom:{
        type: String,
        required : true
    },
    prenom:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    numtel:{
        type:Number,
        required:true
    },
  


});
module.exports=mongoose.model('fournisseurs', fournisseurSchema);