module.exports.postmenu = (req,res)=>{
db.postmenu([req.body.title, req.body.image , req.body.price, req.body.ID_brand],(err,result)=>{
    err ? console.log(err) : res.status(201).send(result)
})
}