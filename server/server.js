const Koa = require("koa")
const send = require("koa-send")
const path = require("path")
const { checkCookie } = require("./api/gate")
const KoaBody = require("koa-body")
const { sessionConfig } = require("./api/config")

const app = new Koa()

const staticRouter = require("./routers/static")

const isDev = process.env.NODE_ENV === "development"

const session = require('koa-session');

let sessions = {}

app.keys = ['123456a'];      

app.use(session(sessionConfig, app));

app.use(KoaBody({
    multipart:true
}))
app.use(async (ctx, next)=>{
    try{
        console.log(`require with path ${ctx.path}`)
        if(ctx.path.indexOf("/api/prefetch") === 0){
            await next()
        }
        else if(ctx.path.indexOf("/api/") === 0){
            if(checkCookie(ctx)){
                await next()
            }
        }else{
            await next()
        }
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

const apiRouter = require("./api")

app.use(apiRouter.routes()).use(apiRouter.allowedMethods())


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