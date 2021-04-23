const connection = require('../config.js')
const mysql = require('mysql');

const getMenu = function(ID_brand,callback){
    let syntax = `SELECT * from menu where ID_brand="${ID_brand}"`
    connection.query(syntax,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const postMenu = function(params,callback){
    let syntax = "INSERT INTO menu (title, image, price, ID_brand) values (?,?,?,?)"
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

module.exports = {getMenu,postMenu}