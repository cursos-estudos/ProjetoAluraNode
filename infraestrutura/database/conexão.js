const mysql = require('mysql')

const conexão = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '6040',
    database: 'agendapetshop'
})

module.exports = conexão