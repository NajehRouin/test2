//import module
var express = require('express');
var router = express.Router();
var clientModel =require('../schemas/clients-schemas');

//ajouter client
router.post('/clients', (req, res) => {
    var item = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password:req.body.password,
        numtel:req.body.numtel,
        ville:req.body.ville,
        codePostal:req.body.codePostal
    };
    clientModel.collection.insertOne(item, function (err, result) {
        console.log("client inserted Successfully");
        res.send(item);
    });
});

//recherche client par id 
router.get('/clients/:id', (req, res) => {
    var clientId=req.params.id;
    clientModel.findById({_id:clientId},function (err, client) {
        if (err) res.send(err);
        res.send(client);
    });
});


//affiche la listes des clients
router.get('/clients', (req, res) => {
    clientModel.find(function (err, clients) {
        if (err) res.send(err);
        res.send(clients);

    });
});

//Authentification client 

router.post('/clients/authentification',(req,res)=>{
    var email_client=req.body.email;
    var password_client=req.body.password;
    clientModel.findOne({
        email: email_client
    },function(err,client){
            if (err) deferred.reject(err.name + ': ' + err.message);
            if(client && (password_client===client.password))
            {
                   // authentication successful
                res.send({err:"login succeed",message:client});
                
            }else{
                // authentication failed
    
            res.send({err:"Login Failed",message:'Autenticated Failed Try again'});
            }
           

        });
});

//delete client 

router.delete("/clients/:clientId",function(req,res){
    var clientid=req.params.clientId;
    clientModel.findByIdAndRemove(clientid, function(err,docs){
        if(err) return console.log(err);
        res.send('client remove Successufully :'+req.params);
    });
});

//update client

router.put("/clients/:clientId",function(req,res){
    var clientId=req.params.clientId;
    var client=req.body;
    console.log(client);
    
    clientModel.findOneAndUpdate({
        _id:req.params.clientId},req.body,function(err,client){
            res.send('client successfully updated');
        

    });

});
module.exports = router;