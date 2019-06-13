const router = require('koa-router')()
const UserRouter = require('./User')

module.exports = (app) =>{
    router.use('/user', UserRouter.routes(), UserRouter.allowedMethods())

    app.use(router.routes()).use(router.allowedMethods())
}