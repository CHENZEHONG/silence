
const Koa = require('koa2')
const app = new Koa()


const server = require('http').createServer(app.callback())
const io = require('socket.io')(server)

io.on('connection', function(socket){
    console.log('connected')
    socket.on('chat', function(msg){
        console.log(msg)
        io.emit('chat', msg + "222222");
    });
});

server.listen(3000, () => {
    console.log('Application is starting on port 3000')
})