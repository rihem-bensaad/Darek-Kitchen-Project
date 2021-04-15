const connection = require ('../config.js')
const mysql = require('mysql');

//bcrypt.hash for password
const CreateUser= function(params,callback) {
    let syntax = 'INSERT into user (firstName,lastName,email,password,phoneNumber,location) values (?,?,?,?,?,?)'
    connection.query(syntax,params,(err,results)=>{
        return err ? callback(err,null) : callback(null,results);
    })
}

//bcrypt.compare , jwt.sign for creating the token
const Login= function(params,callback) {
    let syntax = 'INSERT into user (email,password) values (?,?)'
    connection.query(syntax,params,(err,results)=> {
return err ? callback(err,null) :callback(null,results) ;
    })
}
module.exports = {
    CreateUser,
    Login
}