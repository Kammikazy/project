const Allianca = require('../models/Alliances')

const findAlianca = async (connection,  req, res) => {

  const allianca = await Allianca.find(connection,req.session.user.username)
  if (!allianca) {
 res.status(404).send('Nenhuma cidade encontrada.')
 return;
}
console.log("dddd");
          req.session.alianca = allianca
          res.locals.alianca = allianca
res.render('Administration/Aliances/aliance',{aliancas: 123456})
  }

  module.exports = {
   findAlianca
  }
