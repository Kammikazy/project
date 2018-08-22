const express = require('express')
const router = express.Router()
const controllerLogin = require('../controllers/login')
const controllernews = require('../controllers/newscontroler')
const connection = require('../Config/database')
const controllerAdmin = require('../controllers/Administration')

router.get('/login', controllerLogin.login)
router.post('/login', controllerLogin.authenticateUser.bind(null, connection))
router.get('/createUser', controllerLogin.FormUser)
router.post('/createUser', controllerLogin.createUser.bind(null, connection))
router.post('/usermameverica', controllerLogin.usermameverica.bind(null, connection))
router.post('/emailverifica', controllerLogin.emailverifica.bind(null, connection))
router.get('/logout', controllerLogin.logoutUser)
router.get('/news', controllernews.news)
//
/*************************/


module.exports = app => app.use('/', router)
