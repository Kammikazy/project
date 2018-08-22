const User = require('../models/news')
/***************************************************
criar noticas

/*******************************************************/
/*const login = (req, res) => {
    if(req.session.user){
        return res.redirect('/')
    }
    res.render('login/login',{error: false})
}

const FormUser = (req, res) => {
    res.render('login/create')
}
*/
const news = (req, res) => {
    res.render('news')
}/*
const createUser =  async (connection, req, res) => {
    await User.createUser(connection, req.body)
    res.redirect('/login')
}
const authenticateUser = async (connection,  req, res) => {

    const user = await User.findUser(connection, req.body.username,req.body.password)
    if(!user){
        return res.render('login/login',{error: true})
    }
    user.password = undefined
    req.session.user = user
    res.redirect('/')
}
const logoutUser = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}
*/
module.exports = {
    news
}
