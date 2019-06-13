const koa2 = require('koa2')
const app = new koa2()
const router = require('./routes/router')

const bodyparser = require('koa-bodyparser');

app.use(bodyparser());
router(app)
app.listen(8080,()=>{
    console.log('server is running at http://localhost:8080')
})