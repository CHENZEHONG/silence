const bodyparser = require('koa-bodyparser')
const static = require('koa-static')
// const logger = require('koa-logger')
// const Moment = require('moment')
const path = require('path')
const json = require('koa-json');
const logger = require('./log4js')
const staticPath = '../static'



module.exports = (app) => {
    // app.use(logger((str) => {
    //     const logTxt = Moment().format('YYYY-MM-DD HH:mm:ss') + str
    //     fs.appendFile(path.resolve(__dirname, logPath), logTxt, function (err) {
    //         if (err) console.log(err)
    //     })
    // }));
    app.use(json());
    app.use(async (ctx, next) => {
        const start = new Date();
        let intervals;
        try {
            await next();
            intervals = new Date() - start;
            logger.logResponse(ctx, intervals);
        } catch (error) {
            intervals = new Date() - start;
            logger.logError(ctx, error, intervals);
        }
    })
    app.use(bodyparser());
    app.use(static(
        path.resolve(__dirname, staticPath)
    ));
}