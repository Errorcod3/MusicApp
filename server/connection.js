const mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: "process.env.host",
    database: "process.env.database",
    password: "process.env.password",
    port: "process.env.port",
    user: "process.env.user",
})

module.exports.pool = pool;