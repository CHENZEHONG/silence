const UserService = require('../service/User')
const md5 = require('md5')

module.exports = {
    getUser: async (ctx, next) => {
        ctx.response.body = await UserService.getUser()
    },
    addUser: async (ctx, next) => {
        let newUser = ctx.request.body
        newUser.password = md5(newUser.password)
        await UserService.addUser(newUser).then(() => {
            console.log('Successful addition of new users')
        })
    },
    tryLogin: async (ctx, next) => {
        let userMsg = ctx.request.body
        userMsg.password = md5(userMsg.password)
        let result = await UserService.tryLogin(userMsg.username, userMsg.password)
        if (result.length === 0) {
            console.log('登录失败')
            ctx.response.body = '登录失败'
        } else if (result.length !== 0) {
            ctx.response.body = '登录成功'
            console.log('登录成功')
        }
    }

}