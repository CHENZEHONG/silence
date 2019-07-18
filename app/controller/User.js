const UserService = require('../service/User');
const md5 = require('md5');

module.exports = {
    getUser: async (ctx, next) => {
        if (ctx.cookies.get('username')) {
            ctx.response.body = await UserService.getUser();
            // 设置session
            let n = ctx.session.views || 0;
            ctx.session.views = ++n;
        } else {
            ctx.response.body = 'PLEASE LOGIN FIRST';
        }
    },
    addUser: async (ctx, next) => {
        let newUser = ctx.request.body;
        newUser.password = md5(newUser.password);
        await UserService.addUser(newUser).then(() => {
            console.log('Successful addition of new users');
            ctx.response.body = 'new users created';
        })
    },
    tryLogin: async (ctx, next) => {
        let userMsg = ctx.request.body;
        userMsg.password = md5(userMsg.password);
        let result = await UserService.tryLogin(userMsg.username, userMsg.password);
        if (result.length === 0) {
            ctx.response.body = '登录失败';
            console.log('登录失败');
        } else if (result.length !== 0) {
            ctx.response.body = '登录成功';
            console.log('登录成功');
            ctx.cookies.set(
                'username',
                ctx.request.body.username,
                {
                    domain: 'localhost',
                    path: '/',
                    maxAge: 1000 * 60 * 60 * 24,
                    expires: new Date('2019-07-31'),
                    httpOnly: false,
                    overwrite: false
                }
            );
        }
    }

};