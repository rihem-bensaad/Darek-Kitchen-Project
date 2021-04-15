const db = require('../database/controllers/Auth')
const mysql = require('mysql');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createUser = (req,res)=>{
    
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(req.body.password,salt,function(err,hash){
            db.createUser([req.body.firstName, req.body.lastName,req.body.email,hash,req.body.phoneNumber,req.body.location],(err,result)=>{
                err ? console.log(err) : res.status(201).send(result)
        })
    })

})
}

module.exports.login = (req,res)=>{
    
    db.Login(req.body.email,(err,result)=>{
   if (result.length>0){
      bcrypt.compare(req.body.password,result[0].password, (err,result)=>{
          if (err){
              throw err
          }
     
      })
   }
        // err ? console.log(err) : res.status(201).send(user.password)
    })
}
