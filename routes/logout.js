const express = require('express')
const controllerAdmin = require('../controllers/login')
const router = express.Router()
//router.get('/Administration/', (req, res) => res.render('Administration/index'))
router.get('/login/logout',controllerAdmin.logoutUser)

//router.get('/Administration', (req, res) => res.render('Administration/index',controllerAdmin.findcidade.bind(null, connection)))
//*/
module.exports = app => app.use('/', router)
