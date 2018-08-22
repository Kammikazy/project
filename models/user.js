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

     if(err){
         reject(err)
     }else{
         //console.log(result)
         if(result.length>0){
             resolve(true)
         }
         else{
             resolve(false)
         }
     }
        })
    })
}
/*****************************************************************************************************/
const verificamail = (connection,email) => {
    return new Promise ((resolve, reject) => {
   connection.query(`SELECT * FROM user WHERE mail = '${email}' `, (err, result) =>{

     if(err){
         reject(err)
     }else{
         //console.log(result)
         if(result.length>0){
             resolve(true)
         }
         else{
             resolve(false)
         }
     }
        })
    })
}

const AlteraPasswordUser = (connection,data) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE user SET password = '${data.password}' WHERE username = '${data.username}'`, (err, result) => {
            if(err){
            resolve(false)
            }else{
                resolve(result)
            }
        })
    })
}


const AlteraemailUser = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`UPDATE user SET mail = '${data.email}' WHERE username = '${data.username}'`, (err, result) => {
            if(err){
            resolve(false)
            }else{
                resolve(result)
            }
        })
    })
}



module.exports = {
    createUser, findUser,verificauser,verificamail,AlteraPasswordUser,AlteraemailUser
}
