const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')
const backendApp = new Koa()
const frontendApp = new Koa()
const backendRouter = new Router()
const frontendRouter = new Router()

const bundle = fs.readFileSync(path.resolve(__dirname,'../dist/server.bundle.js'),'utf-8')
const renderer = require('vue-server-renderer').createBundleRenderer(bundle,{
    template:fs.readFileSync(path.resolve(__dirname,'../dist/index.ssr.html'),'utf-8')
})

//后台server
backendRouter.get('/index',(ctx,next)=>{
    // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
    renderer.renderToString((err,html)=>{
        if(err)
        {
            console.log(err)
            ctx.state = 500;
            ctx.body = "服务器内部出错"
        }
        else
        {
            //console.log(123)
            console.log(html)
            ctx.state = 200;
            ctx.body = html
        }
    })
})

backendApp.use(serve(path.resolve(__dirname,'../dist')))
backendApp.use(backendRouter.routes())
            .use(backendRouter.allowedMethods)

backendApp.listen(3000,()=>{
    console.log('服务端渲染地址：http://localhost:3000')
})

//前端server
frontendRouter.get('/index',(ctx,next)=>{
    let html = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8')
    ctx.type= 'html'
    ctx.state = 200
    ctx.body = html
})

frontendApp.use(serve(path.resolve(__dirname,'../dist')))
    .use(frontendRouter.routes())
    .use(backendRouter.allowedMethods)

frontendApp.listen(3001,()=>{
    console.log('浏览器渲染地址：http://localhost:3001')
})