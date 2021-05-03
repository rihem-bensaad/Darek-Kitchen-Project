const connection = require ('../config.js')
const mysql = require('mysql');


const createUser= function(params,callback) { 
    let syntax = 'INSERT into user (firstName,lastName,email,password,phoneNumber,location) values (?,?,?,?,?,?)'
    connection.query(syntax,params,(err,results)=>{
        return err ? callback(err,null) : callback(null,results);
    })
}


const Login= function(email,callback) {
    let syntax = `SELECT * from user where email="${email}"`
    connection.query(syntax,(err,results)=> {
return err ? callback(err,null) :callback(null,results) ;
    })
}
module.exports = {
    createUser,
    Login
}