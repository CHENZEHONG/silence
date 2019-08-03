const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const path = require('path');
const Koa_json = require('koa-json');
const logger = require('./log4js');
const session = require('koa-session');
const Cors = require('@koa/cors');
const staticPath = '../static';

const SessionStore = require('../app/mongo/sessionStore');
const Mongoose = require('../plugins/mongoose');

const check = require('./tokencheck');

module.exports = (app) => {

    app.use(Cors());
    app.use(Koa_json());
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
    });
    app.use(bodyparser());
    app.use(static(
        path.resolve(__dirname, staticPath)
    ));

    app.keys = ['this is some secret '];
    const CONFIG = {
        key: 'koa:sess',
        maxAge: 1000 * 60 * 60 * 24,
        autoCommit: true,
        overwrite: true,
        httpOnly: true,
        signed: true,
        rolling: false,
        renew: false,
        store: new SessionStore({
            collection: 'session',
            connection: Mongoose,
            expires: 86400,
            name: 'session'
        }),
    };
    app.use(session(CONFIG, app));
    app.use(check);
};