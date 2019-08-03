const jwt = require('jsonwebtoken');
const secret = require('../plugins/secret');

async function tokencheck(ctx, next) {
    // 登录不用检查token
    if (ctx.request.url === '/user/login') {
        await next();
    } else {
        // 规定 token 写在 header 的'authorization'
        let token = ctx.request.headers["authorization"];
        // 解码
        let payload = await jwt.verify(token, secret);
        let {time, timeout} = payload;
        let nowdate = new Date().getTime();
        if (nowdate - time <= timeout) {
            //token 未过期
            await next();
        } else {
            // token已过期
            ctx.response.body = {
                status: 50014,
                message: 'token已过期'
            }
        }
    }

}

module.exports = tokencheck;