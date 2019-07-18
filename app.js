'use strict';
const koa2 = require('koa2');
const app = new koa2();
const router = require('./routes/router');

const middleware = require('./middleware');
const initDatabase = require('./init/initDatabase');

middleware(app);
router(app);

async function start() {
    await initDatabase();

    app.listen(8080, () => {
        console.log('server is running at http://localhost:8080')
    })
}

start();
