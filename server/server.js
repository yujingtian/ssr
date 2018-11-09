const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs')
const backendApp = new Koa()
const frontendApp = new Koa()
const backendRouter = new Router()
const frontendRouter = new Router()


const serverBundle = require(path.resolve(__dirname,'../dist/vue-ssr-server-bundle.json'))
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'))
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8')
const renderer = require('vue-server-renderer').createBundleRenderer(serverBundle,{
    template:template,
    runInNewContext:false,
    clientManifest:clientManifest
})

//后台server
// backendRouter.get('/index', (ctx,next)=>{
//     let context = {
//       url: ctx.url,
//       name:"俞菁田"
//     };
//     // console.log(ctx)
//     // 这里用 renderToString 的 promise 返回的 html 有问题，没有样式
//   renderer.renderToString(context,(err,html)=>{
//         if(err)
//         {
//             console.log(err)
//             ctx.state = 500;
//             ctx.body = "服务器内部出错"
//         }
//         else
//         {
//             //console.log(123)
//             console.log(html)
//             ctx.state = 200;
//             ctx.body = html
//         }
//     })
// })

// backendRouter.get('*', (ctx, next) => {
//   let context = {
//     url: ctx.url,
//     name:"俞菁田"
//   };
//   const ssrStream = renderer.renderToStream(context);

//   ctx.status = 200;
//   ctx.type = 'html';
//   ctx.body = ssrStream;
// });
backendRouter.get('*', async (ctx, next) => {
  let context = {
    url: ctx.url,
    name:"俞菁田"
  };
  try {
    let html = await new Promise((resolve, reject) => {
      // 这里直接使用 renderToString 的 Promise 模式，返回的 html 字符串没有样式和 __INITIAL_STATE__，原因暂时还没有查到
      // 所以，只能暂时先自己封装一个 Promise，用 renderToString 的 callback 模式
      renderer.renderToString(context,(err, html) => {
        if (err) {
          reject(err);
        } else {
          resolve(html);
        }
      });
    });
    ctx.type = 'html';
    ctx.status = 200;
    ctx.body = html;
  } catch (err) {
    console.error(err);
    ctx.status = 500;
    ctx.body = '服务器内部错误';
  }
});
backendApp.use(serve(path.resolve(__dirname,'../dist')))
            .use(backendRouter.routes())
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