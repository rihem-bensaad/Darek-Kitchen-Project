const connection = require ('../config.js');
const mysql = require('mysql')

const getBrands = function(callback){
    let syntax = `SELECT * from brands`
    connection.query(syntax,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}
const postBrands = function(params,callback){
    let syntax = "INSERT INTO brands (brandName,category,logo) values (?,?,?)"
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

module.exports = {
    postBrands,
    getBrands
}