const db = require('../database/controllers/menu');
const mysql = require('mysql');

const cloud = require('cloudinary')

module.exports.postmenu = (req, res) => {
db.postMenu([req.body.title, req.body.image ,req.body.location, req.body.price, req.body.description],(err,result)=>{
    err ? console.log(err) : res.status(201).send("posted")
})
}

module.exports.getmenu = (req,res)=>{
    db.getMenu((err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}

module.exports.deletemenu = (req,res)=>{
    db.deletemenu([req.body.title,req.body.image,req.body.location,req.body.price],req.params.id,(err,result)=>{
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
    db.updateMenu([req.body.title,req.body.image,req.body.location,req.body.price],req.params.id,(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}