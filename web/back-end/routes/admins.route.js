var express = require('express');
var router = express.Router();
var adminModel =require('../schemas/admins-schemas');



router.post('/admins/authentification',(req,res)=>{
    var login_admin=req.body.login;
    var password_admin=req.body.password;
    adminModel.findOne({
        login: login_admin
    },function(err,admin){
            if (err) deferred.reject(err.name + ': ' + err.message);
            if(admin && (password_admin===admin.password))
            {
                   // authentication successful
                res.send({err:"login succeed",message:admin});
                
            }else{
                // authentication failed
    
            res.send({err:"Login Failed",message:'Autenticated Failed Try again'});
            }
           

        });
});
module.exports = router;