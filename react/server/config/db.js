var mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'dhksthxpa12',
    database : ''
})

module.exports = db;