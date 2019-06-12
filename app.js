const koa2 = require('koa2')
const app = new koa2()

app.listen(8080,()=>{
    console.log('server is running at http://localhost:8080')
})