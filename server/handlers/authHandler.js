const mysql = require('mysql');
const adminHandler = require('./adminHandler')
const chefHandler = require('./chefHandler')
const userHandler = require('./userHandler')

module.exports.authentication = (req,res)=>{
adminHandler.adminLogin(req,res,()=>{
       userHandler.login(req,res) 
})
}