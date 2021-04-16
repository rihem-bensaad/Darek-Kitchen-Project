const con = require('../config.js');


module.exports.getuser = function (req, res) {
  con.query("SELECT * FROM user", function (err, result) {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
};

module.exports.getuserById = function (req, res) {
  const sql = "SELECT * FROM user WHERE id = ?"
  con.query(sql, [req.params.id],function (err, result) {
    console.log(req.params);
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
};


  module.exports.edituser = function(req,res){ 
    let sql =  "UPDATE user SET firstName=?, lastName=?, email=?, phoneNumber=?, location=? WHERE id = ?";
    let x = req.body
        con.query(sql,[x.firstName, x.lastName, x.email, x.phoneNumber, x.location,req.params.id],function(err, result){
          if (err) {
            console.error(err);
          } else {
            res.send(result);
          }        
    })
}

module.exports.deleteuser = function(req,res) { 
  const sql = 'DELETE FROM user WHERE id=?'
        con.query(sql, [req.params.id],function(err, result) {
          if (err) {
            console.error(err);
          } else {
            res.send(result);
          }
        })
      }