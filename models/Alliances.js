
    const find = (connection,username) => {
        return new Promise((resolve, reject) => {
          connection.query(`SELECT alianca.nome,alianca.N_membros,alianca.TAG FROM user INNER JOIN alianca ON user.cod_alianca=alianca.id WHERE user.username='${username}'`, (err, result) => {
                if(err){
                    reject(err)
                }else{
                  console.log(result[0]);
                    resolve(result[0])
                }
            })
        })
    }

    module.exports = {
        find
    }