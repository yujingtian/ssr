const Koa = require("koa")
const send = require("koa-send")
const path = require("path")
const app = new Koa()

const staticRouter = require("./routers/static")

const isDev = process.env.NODE_ENV === "development"

app.use(async (ctx, next)=>{
    try{
        console.log(`require with path ${ctx.path}`)
        await next()
    }   
    catch(err){
        console.log(err)
        ctx.status = 500
        if (isDev)
        {
            ctx.body = err.message
        }
        else
        {
            ctx.body = "please try again later"
        }
    }
})

app.use(async (ctx, next) => {
    if (ctx.path === '/favicon.ico') {
        await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../') })
    } else {
        await next()
    }
})


app.use(staticRouter.routes()).use(staticRouter.allowedMethods())

let pageRouter
if (isDev) {
    console.log("这是开发环境")
    pageRouter = require('./routers/dev-ssr')
}
else {
    console.log("这是生产环境")
    pageRouter = require('./routers/ssr')
}

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST,()=>{
    console.log(`server listening on ${HOST}:${PORT}`)
})