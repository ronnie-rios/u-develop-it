const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
    host: 'localhost',
    //your mysql username
    user: 'root',
    //your mysql password
    password: 'Momo14!lanD@',
    database: 'election'
}, 
console.log('connected to the election database.')
)

module.exports = db;