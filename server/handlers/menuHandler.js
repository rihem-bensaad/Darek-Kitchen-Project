const db = require('../database/controllers/menu');
const mysql = require('mysql');

module.exports.postmenu = (req, res) => {
db.postMenu([req.body.title, req.body.image , req.body.price, req.body.ID_brands],(err,result)=>{
    err ? console.log(err) : res.status(201).send("posted")
})
}

module.exports.getmenu = (req,res)=>{
    db.getMenu((err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}
module.exports.getMenuById = (req, res) => {
    db.getMenuById([req.params.ID_menu],(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
    console.log(req.params.ID_menu,"<=====menu of brand");
}