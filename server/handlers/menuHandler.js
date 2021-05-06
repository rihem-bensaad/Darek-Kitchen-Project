const db = require('../database/controllers/menu');
const mysql = require('mysql');

const cloud = require('cloudinary')

module.exports.postmenu = (req, res) => {
    let x = req.body
db.postMenu([x.title, x.image ,x.location, x.price, x.description],(err,result)=>{
    err ? console.log(err) : res.status(201).send("posted")
})
}

module.exports.getmenu = (req,res)=>{
    db.getMenu((err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}

module.exports.deletemenu = (req,res)=>{
    let x = req.body
    db.deletemenu([x.title,x.image,x.location,x.price],req.params.id,(err,result)=>{
        err ? console.log(err) : res.status(201).send("menu deleted")

    })
}
module.exports.getMenuById = (req, res) => {
    db.getMenuById([req.params.ID_menu],(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
    console.log(req.params.ID_menu,"<=====menu");
}

module.exports.updateMenu = (req,res) => {
    let x = req.body
    db.updateMenu([x.title,x.image,x.location,x.price, x.description],req.params.id,(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}