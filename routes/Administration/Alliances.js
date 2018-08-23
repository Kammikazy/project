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
  controlleruser.findAlianca(connection, req, res)

    next();
}, (req, res, next) => {
    //Can continue this cycle of calling next function until last `sendResponse` function is reached.
    //Can even set `error` in request for `sendResponse`

  controllerAdmin.findcidade3(connection, req, res)

})

module.exports = app => app.use('/', router)
