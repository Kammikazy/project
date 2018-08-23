const express = require('express')
const router = express.Router()
const connection = require('../../Config/database')
const controllerAdmin = require('../../controllers/Administration')
const controlleruser = require('../../controllers/Alliances')

//
//router.get('/Administration/Alliances', (req, res) => controllerAdmin.findcidade3(connection, req, res));
//router.get('/Administration/Alliances', (req, res) => controlleruser.findAlianca(connection, req, res));
router.get('/Administration/Alliances', (req, res, next) => {

  //Do something here and to add data to your request use
  controllerAdmin.findcidade3(connection, req, res)
    //res.render('Administration/Alliances')
    next();
}, (req, res, next) => {
  controlleruser.findAlianca(connection, req, res)

  


})

module.exports = app => app.use('/', router)
