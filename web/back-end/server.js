//import module

var express = require('express');
var _ = require('lodash');
var bodyparser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var multer = require('multer');
var Q = require('q');
var path = require('path');
var mongoose = require('mongoose');
var schema = require('mongoose').Schema;
var ObjectID = require('mongodb').ObjectID;


mongoose.connect('mongodb://localhost/labbasni');

// api client
var clientModel = require('./schemas/clients-schemas');
var clientRoute = require('./routes/clients.route');

//Api fournisseur

var fournisseurModel = require('./schemas/fournisseur-schemas');
var fournisseurRoute = require('./routes/fournisseur.route');
//api admin


var userRoute = require('./routes/admins.route');


var app = express();

app.use(cors());

app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static('public'));
app.use('/',clientRoute);
app.use('/',fournisseurRoute);
app.use('/',userRoute);

//port
const port = 3000;

//testing server
app.get('/',(req,res)=>{
    res.send('app started');

});

app.listen(port,()=>{
    console.log('server started at port :' +port);
});
