const mysql = require('mysql');

const myDb = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "auth-mysql"
})

module.exports = myDb;

