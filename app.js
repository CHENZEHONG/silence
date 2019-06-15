const koa2 = require('koa2')
const app = new koa2()
const router = require('./routes/router')

const bodyparser = require('koa-bodyparser');
const static = require('koa-static')
const path = require('path')
const staticPath = './static'
const initDatabase = require('./init/initDatabase')


app.use(bodyparser());
app.use(static(
    path.join(__dirname, staticPath)
))

router(app)


async function start() {
    await initDatabase()
    
    app.listen(8080, () => {
        console.log('server is running at http://localhost:8080')
    })
}


start()
