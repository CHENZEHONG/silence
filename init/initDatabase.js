const mysql = require('mysql2')
const Config = require('../config/config').sequelize



const dbInit = async function createDatabase() {
    let connection = await mysql.createConnection({
        host: Config.host,
        user: Config.username,
        password: Config.password,
    })
    connection.query(
        `create database if not exists \`${Config.database}\`
        default character set utf8
        collate utf8_general_ci`,
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            if (fields) console.log(fields); // fields contains extra meta data about results, if available
            if (err) console.log(err)
        }
    )
}


module.exports = dbInit