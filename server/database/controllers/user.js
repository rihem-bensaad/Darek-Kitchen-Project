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