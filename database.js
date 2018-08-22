const mysql = require('mysql')
const config = require( "./config.json" )
const connection =mysql.createConnection({
 host:config.host,
 user:config.user,
 password:config.password,
 database:config.database,
// port:config.port
});

connection.connect((err) =>{
    if(err){
        console.log(err)
        process.exit(0)
    }else{
    console.log('database on')
}
})
connection.query(`CREATE TABLE IF NOT EXISTS user (userId INT(11) NOT NULL AUTO_INCREMENT, username VARCHAR(50) DEFAULT NULL, password VARCHAR(60) DEFAULT NULL, PRIMARY KEY (userId))`, (err ,result) =>{
    if(err){
        console.log(err)
    }
})

module.exports = connection
