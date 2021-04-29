const connection = require ('../config.js');
const mysql = require('mysql');


const addAdmin = function(params,callback){
    let syntax = "INSERT INTO admin (userName,email,password) values (?,?,?)"
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}


const adminLogin= function(email,callback) {
    let syntax = `SELECT * from admin where email="${email}"`
    connection.query(syntax,(err,results)=> {
return err ? callback(err,null) :callback(null,results) ;
    })
}

const postbrand = function(params,callback){
    let syntax = "INSERT INTO brands (brandName,category,logo) values (?,?,?)"
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const deletebrand = function(params,id,callback){
    let syntax = `DELETE from brands where ID_brands=${id}`
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const deleteUser = function(params,id,callback){
    let syntax = `DELETE from user where ID_user=${id}`
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const deleteChef = function(params,id,callback){
    let syntax = `DELETE from chef where id=${id}`
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const updateBrand = function(params,id,callback){
let syntax =`UPDATE brands SET brandName=?,category=?, logo=? WHERE ID_brands=${id}`
connection.query(syntax,params,(err,result)=>{
    return err ? callback(err,null) : callback(null,result)
})  
}

const createChef= function(params,callback) {
    let syntax = 'INSERT into chef (firstName,lastName,email,password,phoneNumber,location,imageCardId) values (?,?,?,?,?,?,?)'
    connection.query(syntax,params,(err,results)=>{
        return err ? callback(err,null) : callback(null,results);
    })
}
const getChef= function(callback) {
    let syntax = 'SELECT * FROM chef'
    connection.query(syntax,(err,results)=>{
        return err ? callback(err,null) : callback(null,results);
    })
}



module.exports={
    addAdmin,
    adminLogin,
    postbrand,
    deletebrand,
    deleteUser,
    deleteChef,
    updateBrand,
    createChef,
    getChef,
}