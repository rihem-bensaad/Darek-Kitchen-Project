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