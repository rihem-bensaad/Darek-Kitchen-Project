const connection = require ('../config.js')
const mysql = require('mysql');

//bcrypt.hash for password
// const createChef= function(params,callback) {
//     let syntax = 'INSERT into chef (firstName,lastName,email,password,phoneNumber,location,imageCardId) values (?,?,?,?,?,?,?)'
//     connection.query(syntax,params,(err,results)=>{
//         return err ? callback(err,null) : callback(null,results);
//     })
// }

//bcrypt.compare , jwt.sign for creating the token
const chefLogin= function(email,callback) {
    let syntax = `SELECT * from chef where email="${email}"`
    connection.query(syntax,(err,results)=> {
return err ? callback(err,null) : callback(null,results) ;
    })
}






module.exports = {
    // createChef,
    chefLogin
}