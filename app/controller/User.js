const UserService = require('../service/User');
const md5 = require('md5');
const redis = require('../../plugins/redis');
const jwt = require('jsonwebtoken');
const secret = require('../../plugins/secret');

module.exports = {
    getUser: async (ctx, next) => {
        if (ctx.cookies.get('username')) {
            ctx.response.body = await UserService.getUser();
            // 设置session 放入mongodb中
            let n = ctx.session.views || 0;
            ctx.session.views = ++n;
            // 验证token
            let token = ctx.request.headers["authorization"];
            let payload = await jwt.verify(token, secret);
            let {time, timeout} = payload;
            let data = new Date().getTime();
            if (data-time<=timeout){
                // Token 未过期
                console.log('Token 未过期')
            } else {
                console.log('token已过期')
            }
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
            // 把username放入redis
            redis.set('sessionId', ctx.request.body.username);

            // 创建Token
            let payload = {username: userMsg.username, time: new Date().getTime(), timeout: 1000 * 60 * 60 * 2};
            let token = jwt.sign(payload, secret);
            ctx.response.body = {
                message: '登录成功',
                data: {
                    token
                },
            }
        }
    },
    editInfo: async (ctx, next) => {
    },
};