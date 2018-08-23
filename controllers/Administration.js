const Cidade = require('../models/Cidades')

const findcidade = async (connection,  req, res) => {

  const cidade = await Cidade.findcidade(connection, req.session.user.username)
      if(!cidade){
          return false
      }
      else{
      //  console.log(cu);
    //  user.password = undefined
          req.session.cidade = cidade
          res.locals.cidade = cidade
return res.render('Administration/')
    }
  }
  const findcidade2 = async (connection,  req, res) => {

    const cidade = await Cidade.findcidade(connection, req.session.user.username)
        if(!cidade){
            return false
        }
        else{
        //  console.log(cu);
      //  user.password = undefined
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
          //  console.log(cu);
        //  user.password = undefined
              req.session.cidade = cidade
              res.locals.cidade = cidade
              res.render('Administration/Alliances')
//res.status(200).send(cidade);
  //

        }
      }

  module.exports = {
      findcidade,findcidade2,findcidade3
  }
