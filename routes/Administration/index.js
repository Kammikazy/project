const express = require('express')
const router = express.Router()
const connection = require('../../Config/database')
const controllerAdmin = require('../../controllers/Administration')

//router.get('/Administration',controllerAdmin.findcidade.bind(null, connection))
router.get('/Administration', (req, res) => controllerAdmin.findcidade(connection, req, res));

module.exports = app => app.use('/', router)
