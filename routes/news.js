const express = require('express')
const router = express.Router()
const controllerLogin = require('../controllers/newscontroler')
const connection = require('../Config/database')


//router.get('/login', controllerLogin.login)
//router.post('/login', controllerLogin.authenticateUser.bind(null, connection))
//router.get('/createUser', controllerLogin.FormUser)
//router.post('/createUser', controllerLogin.createUser.bind(null, connection))
//router.get('/logout', controllerLogin.logoutUser)
router.get('/news', controllerLogin.news)



module.exports = app => app.use('/', router)


/*const express = require('express')
const router = express.Router()


//middleware checagem de usuario na sessao.
router.use((req, res, next) => {
    if('user' in req.session){
        return next()
    }
    res.render('news')
    //res.redirect('home')
})
//middleware add user in locals home
router.use((req,res, next) =>{
    if('user' in req.session){
        res.locals.user = req.session.user
    }
    next()

})
router.get('/', (req, res) => res.render('news'))


module.exports = app => app.use('/', router)
*/
