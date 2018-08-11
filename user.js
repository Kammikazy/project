var dateFormat = require('dateformat');
var day=dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
const createUser = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO user (username, password,mail,user_type_id,palavra,ip,DataRegisto,dinheiro) VALUES ('${data.username}', '${data.password}','${data.email}','1','ola','12','${day}',12)`, (err, result) => {
            if(err){
            resolve(false)
            }else{
                resolve(result)
            }
        })
    })
}

const findUser = (connection, username) => {
    return new Promise ((resolve, reject) => {
 connection.query(`SELECT user.cod_user,user.username,user.password,user.mail,user.user_type_id,user.palavra,user.ip,user.DataRegisto,user.dinheiro,user.cod_alianca,user_type.name FROM user INNER JOIN user_type ON user_type.user_type_id=user.user_type_id
 WHERE user.username = '${username}' `, (err, result) =>{
            if(err){
            reject(err)
            }else{

                if(result.length>0){
                    resolve(result[0])
                }
                else{
                    resolve(false)
                }
            }
        })
    })
}

const verificauser = (connection, username) => {
    return new Promise ((resolve, reject) => {
   connection.query(`SELECT * FROM user WHERE username = '${username}' `, (err, result) =>{
     if(result){
if(result.length>0){
               resolve(true)
               }
else{
               resolve(false)
               }
}
else{
               if(err){
                       reject(err)
               }
}
        })
    })
}
const alterauser= (connection, username) => {
    return new Promise ((resolve, reject) => {
        connection.query(`SELECT * FROM user WHERE username = '${username}' `, (err, result) =>{
            if(err){
                reject(err)
            }else{
                //console.log(result)
                if(result.length>0){
                    resolve(result[0])
                }
                else{
                    resolve(false)
                }
            }
        })
    })
}



module.exports = {
    createUser, findUser,verificauser
}
