const express = require('express')
const router = express.Router()
const connection = require('../Config/database')
const controllerAdmin = require('../controllers/Administration')
const controllercidade = require('../controllers/cidadescontroler')
const controlleruser = require('../controllers/login')
const controllAlianca = require('../controllers/Alliances')



router.get('/index', (req, res, next) => {



  next();
}, (req, res, next) => {

  controllercidade.findcidade(connection, req, res)


})


router.get('/perfil', (req, res, next) => {

  controllercidade.findcidade2(connection, req, res)




})
/*
*/
router.post('/perfil',controllerAdmin.AlteraUserpassword.bind(null, connection))
//router.post('/perfil', (req, res) => controllerAdmin.AlteraUserpassword(connection, req, res))



router.get('/alliance', (req, res, next) => {

  controllAlianca.findAlianca(connection, req, res)

  next();
}, (req, res, next) => {

  controllercidade.findcidade3(connection, req, res)




})

//router.get('/alliance',controllerAdmin.FormAliances)
//router.get('/index',controllerAdmin.Formindex)
//router.get('/perfil',controllerAdmin.Formperfil)
/**/


module.exports = app => app.use('/Administration', router)
