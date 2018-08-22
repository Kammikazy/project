const continentetemp=Math.floor(Math.random() * 20)+1
const coordena1=Math.floor(Math.random() * 9)+1;
const coordena2=Math.floor(Math.random() * 400)+1;
const coordena3=Math.floor(Math.random() * 12)+1;
const coordenadas="["+coordena1+":"+coordena2+":"+coordena3+"]"
const continente="["+continentetemp+"]"
const createCidade = (connection, data) => {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO cidade (cod_user,Nome,ouro,madeira,metal,pedra,energia,comida,petrolio,continente,coordenadas,pontos) VALUES ((SELECT cod_user FROM user WHERE username='${data.username}'),'cidade principal',100,200,300,0,0,0,0,'${continente}','${coordenadas}',0)`, (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
const findcidade = (connection,username) => {
    return new Promise ((resolve, reject) => {
        connection.query(`SELECT cidade.cod_cidade, cidade.Nome,cidade.continente,cidade.coordenadas,cidade.ouro,cidade.madeira,cidade.metal,cidade.pedra,cidade.energia, cidade.comida,cidade.petrolio,cidade.pontos FROM user INNER JOIN cidade ON user.cod_user=cidade.cod_user WHERE user.username='${username}' `, (err, result) =>{
            if(err){
                reject(err)
            }else{
               if(result.length>0){
                            resolve(result)

                }
                else{
                    resolve(false)
                }

            }
        })
    })
}

const AlteraCidade = (connection, data) => {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO cidade (cod_user,Nome,ouro,madeira,metal,pedra,energia,comida,petrolio,continente,coordenadas,pontos) VALUES ((SELECT cod_user FROM user WHERE username='${data.username}'),'cidade principal',100,200,300,0,0,0,0,'${continente}','${coordenadas}',0)`, (err, result) => {
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}

module.exports = {
  createCidade,findcidade
}
