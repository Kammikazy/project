const Cidade = require('../models/Cidades')

const findcidade = async (connection,  req, res) => {

  const cidade = await Cidade.findcidade(connection, req.session.user.username)
      if(!cidade){
          return false
      }
      else{
       console.log("ddsadsdas");
    
          req.session.cidade = cidade
          res.locals.cidade = cidade
          res.body= res.locals.cidade
res.render('Administration/index')
    }
  }
  const findcidade2 = async (connection,  req, res) => {

    const cidade = await Cidade.findcidade(connection, req.session.user.username)
        if(!cidade){
            return false
        }
        else{
      
            req.session.cidade = cidade
            res.locals.cidade = cidade
          res.render('Administration/perfil')
      }
    }
    const findcidade3 = async (connection,  req, res) => {

      const cidade = await Cidade.findcidade(connection, req.session.user.username)
          if(!cidade){
              return false
          }
          else{
       
              req.session.cidade = cidade
              res.locals.cidade = cidade
              res.render('Administration/Alliances')
 
        }
      }

  module.exports = {
      findcidade,findcidade2,findcidade3
  }
