const db = require('../database/controllers/brands')
const mysql = require('mysql');



module.exports.getBrands = (req,res)=>{
    db.getBrands((err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}

module.exports.postBrand = (req,res)=>{
    db.postBrands([req.body.brandName, req.body.category,req.body.logo],(err,result)=>{
        err ? console.log(err) : res.status(201).send(result)
    })
}