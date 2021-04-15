const express = require('express');
const router = express.Router()
const db = require("../controllers/User.js")
const mysql = require('mysql');
const bcrypt = require ('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

router.post('/signup', (req,res)=>{
    // const encryptedPassword = bcrypt.hash(req.body.password, saltRounds)
    db.CreateUser([req.body.firstName, req.body.lastName,req.body.email,req.body.password,req.body.phoneNumber,req.body.location],(err,result)=>{
    err ? console.log(err) : res.status(201).send("user created")
})
})
router.post('/login', (req,res)=>{
    
    db.Login([req.body.email,req.body.password],(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
    })


module.exports = router
