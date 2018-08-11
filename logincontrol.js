const User = require('../models/user')
const bcrypt = require('bcrypt')
const Cidade = require('../models/Cidades')
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
const login = (req, res) => {
    if(req.session.user){
        return res.redirect('/')
    }
    res.render('login/login',{error: false})
}

const FormUser = (req, res) => {
    res.render('login/create')
}
const createUser =  async (connection, req, res) => {
  req.body.password = await hashpass(req.body.password)


  const user= await User.createUser(connection, req.body)
  if(!user){
      return res.render('login/create',{error: true})
  }else{
   await Cidade.createCidade(connection, req.body)
   //require('../mail')(req.body.email, 'Bem vindo ao nosso chat', 'Olá ' + req.body.username + ', obrigado por se cadastrar!')
    res.redirect('/login')
}
}

const usermameverica =  async (connection, req, res) => {
//  req.body.password = await hashpass(req.body.password)

  const user= await User.verificauser(connection,req.body.username)
  console.log(user);
  if(user){
  console.log("dasdsad",user);
 return res.render('login/create',{valid: true})
  }else{
    return res.render('login/create',{valid: false})
}
}
const authenticateUser = async (connection,  req, res) => {

  const user = await User.findUser(connection, req.body.username)
    if(!user){
        return res.render('login/login',{error: true})
    }
    if(!await bcrypt.compare(req.body.password, user.password)){
        return res.render('login/login', {error: true})
}
    else{
      if(user.user_type_id==1){
        req.session.user = user
        res.locals.user = user
      res.redirect('/Administration');
    }else if(user.user_type_id==2){
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration');
    }else if(user.user_type_id==3){
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration');
    }else if(user.user_type_id==4){
      req.session.user = user
      res.locals.user = user
      res.redirect('/Administration');
      }
      else if(user.user_type_id==5){
        req.session.user = user
        res.locals.user = user
        res.redirect('/Administration');
    } else {
        console.log("banned");
    }



  }
}
const logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}

module.exports = {
    login, FormUser, createUser, authenticateUser, logoutUser,usermameverica
}
