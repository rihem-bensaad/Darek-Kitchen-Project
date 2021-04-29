const db = require('../database/controllers/Chef')
const mysql = require('mysql');
const bcrypt = require ('bcrypt');
const jwt = require('jsonwebtoken');


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

module.exports.getChefbylocation = (req,res)=>{
    db.getChefbyLocation([req.params.location],(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}

