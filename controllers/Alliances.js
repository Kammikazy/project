const Allianca = require('../models/Alliances')

const findAlianca = async (connection, req, res) => {

  const alianca = await Allianca.findAlianca(connection, req.session.user.username)
  if (!alianca) {
    return false
  } else {
    console.log("dddd");
    req.session.alianca = alianca
    res.locals.alianca = alianca


  }
}


module.exports = {
  findAlianca
}
