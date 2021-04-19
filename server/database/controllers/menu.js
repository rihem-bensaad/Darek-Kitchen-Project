const connection = require('../config.js')
const mysql = require('mysql');

const getMenu = function(ID_brands,callback){
    let syntax = `SELECT * from menu where ID_brands="${ID_brands}"`
    connection.query(syntax,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}
