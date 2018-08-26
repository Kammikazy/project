const User = require('../models/user')
const bcrypt = require('bcrypt')
const Cidade = require('../models/Cidades')
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
const login = (req, res) => {
  if (req.session.user) {
    return res.redirect('/Administration/index')
  }
  res.render('login/login', {
    error: false
  })
}

const FormUser = (req, res) => {
  res.render('login/create')
}

const createUser = async (connection, req, res) => {
  req.body.password = await hashpass(req.body.password)


  const user = await User.createUser(connection, req.body)
  if (!user) {
    return res.render('login/create', {
      error: true
    })
  } else {
    await Cidade.createCidade(connection, req.body)
    require('../mail')(req.body.email, 'Bem vindo ao nosso chat', 'Olá ' + req.body.username + ', obrigado por se cadastrar!')
    return res.render('login/create', {
      error: false
    })
  }
}

const AlteraUserpassword = async (connection, req, res) => {
console.log("password:" +req.body.password);
console.log("oldpassword:" +req.body.oldpassword);
  const user = await User.findUser(connection, req.body.username)
  if (!await bcrypt.compare(req.body.oldpassword, user.password)) {

    return res.send(JSON.stringify({
      'valid': false
    }));
  //  res.redirect("/Administration/perfil");
    //return res.render('Administration/perfil', {error: true})
  } else {
    req.body.password = await hashpass(req.body.password)
    const user = await User.AlteraPasswordUser(connection, req.body)
    if (!user) {
      console.log("Nao Deu");
      return res.send(JSON.stringify({
        'valid': false
      }));
    //  res.redirect("/Administration/perfil");
      //return res.render('Administration/perfil', {error: true})
      //return  res.locals.message= "Its not possibel change the password"


    } else {
        return res.send(JSON.stringify({'valid': true}));
      //res.redirect("/Administration/perfil");
      //return res.render('Administration/perfil', {error: false})
      //console.log("Deu")
      //  console.log(req.body.username)
      //return  res.locals.message= "password its change with sucess"


    }
  }
}

const usermameverica = async (connection, req, res) => {
  //  req.body.password = await hashpass(req.body.password)

  const user = await User.verificauser(connection, req.body.username)
  if (!user) {
    return res.json({
      'valid': true
    });
  } else {
    return res.json({
      'valid': false
    });
  }
}
const emailverifica = async (connection, req, res) => {
  //  req.body.password = await hashpass(req.body.password)

  const user = await User.verificamail(connection, req.body.email)
  if (!user) {

    return res.json({
      'valid': true
    });
  } else {
    return res.json({
      'valid': false
    });
  }
}

/*************************************************************/
const authenticateUser = async (connection, req, res) => {

  const user = await User.findUser(connection, req.body.username)
  if (!user) {
    return res.render('login/login', {
      error: true
    })
  }
  if (!await bcrypt.compare(req.body.password, user.password)) {
    return res.render('login/login', {
      error: true
    })
  } else {
    if (user.user_type_id == 1) {
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration/index');
    } else if (user.user_type_id == 2) {
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration/index');
    } else if (user.user_type_id == 3) {
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration/index');
    } else if (user.user_type_id == 4) {
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration/index');
    } else if (user.user_type_id == 5) {
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration/index');
    } else {
      console.log("banned");
    }



  }
}

const logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login')
    //res.render('login/logout')
  })
}

module.exports = {
  login,
  FormUser,
  createUser,
  authenticateUser,
  logoutUser,
  usermameverica,
  emailverifica,
  AlteraUserpassword
}
