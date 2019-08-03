const router = require('koa-router')()
const UserController = require('../app/controller/User')

const routes = router.get('/', UserController.getUser)
    .post('/addUser', UserController.addUser)
    .post('/trylogin', UserController.tryLogin)
    .post('/login',UserController.login)
module.exports = routes
