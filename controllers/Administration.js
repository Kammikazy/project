const Cidade = require('../models/Cidades')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const hashpass = (password) =>{
    return new Promise((resolve, reject) =>{
        bcrypt.genSalt((err, salt) =>{
            if(err){
                reject(err)
            }else{
                bcrypt.hash(password, salt,(err, hash)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(hash)
                    }
                })
            }
        })
    })
}
const Formindex = (req, res) => {
  console.log('oo');
  return  res.render('Administration/index')
}
const Formperfil = (req, res) => {
    res.render('Administration/perfil')
}
const FormAliances = (req, res) => {
    res.render('Administration/alliances')
}
const AlteraUserpassword =  async (connection, req, res) => {
  console.log(req.body.oldpassword);

  const user = await User.findUser(connection, req.body.username)
    if(!await bcrypt.compare(req.body.oldpassword, user.password)){

  return res.render('Administration/perfil', {error: true})
}
    else{
        req.body.password = await hashpass(req.body.password)
  const user= await User.AlteraPasswordUser(connection, req.body)
  if(!user){
    console.log("Nao Deu");
 
return res.render('Administration/perfil', {error: true})



  }else{
     return res.send({'valid': true});

return res.render('Administration/perfil', {error: false})
  

}
}
}

  module.exports = {
    Formindex,Formperfil,FormAliances,AlteraUserpassword

  }
