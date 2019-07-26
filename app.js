'use strict';
const koa2 = require('koa2');
const app = new koa2();

const http = require('http').createServer(app.callback());
const io = require('socket.io')(http);

const router = require('./routes/router');

const middleware = require('./middleware');
const initDatabase = require('./init/initDatabase');
const port = process.env.PORT || 1113;

middleware(app);
router(app);

// todo socket.io 和 pm2 多进程存在问题
io.on('connection', socket => {
    socket.on('chat message', function (msg) {
        console.log(msg);
        io.emit('chat message', msg);
    });
});

async function start() {
    await initDatabase();
    http.listen(port, () => {
        console.log('server is running at http://localhost:' + port)
    });
}

start();
