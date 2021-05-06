const connection = require('../config.js')
const mysql = require('mysql');

const getMenu = function(callback){
    let syntax = `SELECT * from menu `
    connection.query(syntax,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}
// const getMenuById = function(ID_brands,callback){
//     let syntax = `SELECT * from menu where ID_brands="${ID_brands}"`
//     connection.query(syntax,(err,result)=>{
//         return err ? callback(err,null) : callback(null,result)
//     })
// }

const postMenu = function(params,callback){
    let syntax = "INSERT INTO menu (title, image, location , price, description, quantity) values (?,?,?,?,?,?)"
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const deletemenu = function(params,id,callback){
    let syntax = `DELETE from menu where ID_menu=${id}`
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })
}

const updateMenu = function(params,id,callback){
    let syntax =`UPDATE menu SET title=?,image=?, location=?, price=?, description=?, quantity=? WHERE ID_menu=${id}`
    connection.query(syntax,params,(err,result)=>{
        return err ? callback(err,null) : callback(null,result)
    })  
    }
    

module.exports = {getMenu,postMenu,deletemenu,updateMenu}