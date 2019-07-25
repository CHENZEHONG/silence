const router = require('koa-router')()
const UserRouter = require('./User')

module.exports = (app) => {
    router.use('/user', UserRouter.routes(), UserRouter.allowedMethods())

    app.use(router.routes()).use(router.allowedMethods())
    app.use(async (ctx, next) => {
            switch (ctx.status) {
                case 404:
                    ctx.response.body = '404';
                    break;
                case 500:
                    ctx.response.body = '500';
            }
        }
    );
}