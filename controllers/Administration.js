const Cidade = require('../models/Cidades')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const hashpass = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt((err, salt) => {
      if (err) {
        reject(err)
      } else {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            reject(err)
          } else {
            resolve(hash)
          }
        })
      }
    })
  })
}
const Formindex = (req, res) => {
  console.log('oo');
  return res.render('Administration/index')
}
const Formperfil = (req, res) => {
  res.render('Administration/perfil')
}
const FormAliances = (req, res) => {
  res.render('Administration/alliances')
}
const AlteraUserpassword = async (connection, req, res) => {
  const user = await User.findUser(connection, req.body.username)
  if (!await bcrypt.compare(req.body.oldpassword, user.password)) {
  res.writeHead(200,{'Content-Type': 'application/json'})

   res.end(JSON.stringify(false));
  } else {
    req.body.password = await hashpass(req.body.password)
    const user = await User.AlteraPasswordUser(connection, req.body)
    if (!user) {
      console.log("Nao Deu");
      res.writeHead(200,{'Content-Type': 'application/json'})

       res.end(JSON.stringify(false));
      ///return res.json(false);
    } else {
    res.writeHead(200,{'Content-Type': 'application/json'})
    res.end(JSON.stringify(true));
    //  return res.json(true);
    }
  }
}

module.exports = {
  Formindex,
  Formperfil,
  FormAliances,
  AlteraUserpassword

}
