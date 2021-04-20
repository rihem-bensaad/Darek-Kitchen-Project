const db = require('../database/controllers/Chef')
const mysql = require('mysql');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.createChef = (req,res)=>{
    
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(req.body.password,salt,function(err,hash){
            db.createChef([req.body.firstName, req.body.lastName,req.body.email,hash,req.body.phoneNumber,req.body.location,req.body.imageCardId],(err,result)=>{
                err ? console.log(err) : res.status(201).send(result)
        })
    })

})
}

module.exports.cheflogin = (req,res,callback)=>{
    
    db.chefLogin(req.body.email,(err,result)=>{
        if (result.length===0){
            callback()
        }
  else if (result.length>0){
      bcrypt.compare(req.body.password,result[0].password, (err,result)=>{
          if (err){
             
            return res.status(404).json({
                message: 'Authentication failed'
            })
          }else{
              if(result){
                  const token = jwt.sign({
                      email : req.body.email,
                      userId: req.params.id,
                      role : "chef"
                  }, 'secret', function(err,token){
                      res.status(200).json({
                         
                          message : " authentication sucessful !",
                          token : token
                          
                      })
                  })
              }else{
                res.status(404).json({message: 'Wrong Password!'})
              }
          }

     
      })
   }
    })
}

