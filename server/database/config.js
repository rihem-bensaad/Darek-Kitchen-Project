const mysql = require('mysql');

const con = {
    host: 'localhost',
    user: 'root',
    password: 'Nadhem1920',
    database: 'darekitchen'
}

const connection = mysql.createConnection(con);

connection.connect((err)=> {
    if(err) console.log(err)
    else console.log("connected")
})

module.exports = connection;