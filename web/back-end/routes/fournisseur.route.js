//import module
var express = require('express');
var router = express.Router();
var fournisseurModel =require('../schemas/fournisseur-schemas');

//ajouter fournisseur
router.post('/fournisseurs', (req, res) => {
    var item = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password:req.body.password,
        numtel:req.body.numtel,
        
    };
    fournisseurModel.collection.insertOne(item, function (err, result) {
        console.log("fournisseurs inserted Successfully");
        res.send(item);
    });
});

//recherche fournisseur par id 
router.get('/fournisseurs/:id', (req, res) => {
    var fournisseurId=req.params.id;
    fournisseurModel.findById({_id:fournisseurId},function (err, fournisseur) {
        if (err) res.send(err);
        res.send(fournisseur);
    });
});


//affiche la listes des fournisseurs
router.get('/fournisseurs', (req, res) => {
    fournisseurModel.find(function (err, fournisseurs) {
        if (err) res.send(err);
        res.send(fournisseurs);

    });
});

//Authentification fournisseur 

router.post('/fournisseurs/authentification',(req,res)=>{
    var email_fournisseur=req.body.email;
    var password_fournisseur=req.body.password;
    fournisseurModel.findOne({
        email: email_fournisseur
    },function(err,fournisseur){
            if (err) deferred.reject(err.name + ': ' + err.message);
            if(fournisseur && (password_fournisseur===fournisseur.password))
            {
                   // authentication successful
                res.send({err:"login succeed",message:fournisseur});
                
            }else{
                // authentication failed
    
            res.send({err:"Login Failed",message:'Autenticated Failed Try again'});
            }
           

        });
});

//delete fournisseur 

router.delete("/fournisseurs/:fournisseurId",function(req,res){
    var fournisseurid=req.params.fournisseurId;
    fournisseurModel.findByIdAndRemove(fournisseurid, function(err,docs){
        if(err) return console.log(err);
        res.send('fournisseur remove Successufully :'+req.params);
    });
});

//update fournisseur

router.put("/fournisseurs/:fournisseurId",function(req,res){
    var fournisseurId=req.params.fournisseurId;
    var fournisseur=req.body;
    console.log(fournisseur);
    
    fournisseurModel.findOneAndUpdate({
        _id:req.params.fournisseurId},req.body,function(err,fournisseur){
            res.send('fournisseurs successfully updated');
        

    });

});
module.exports = router;