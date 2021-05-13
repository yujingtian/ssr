const Router = require("koa-router") 
const query = require("../db")
const commonResponse = require("../commonResponse")
const UUID = require("../utils")
const { cookieConfig } = require("../config")

const userRouter = new Router()


userRouter.post("/login",async (ctx) => {
    let data = {}
    const params = ctx.request.body
    const account = params.account
    const password = params.password 
    await query(`select * from watch_user where account='${account}' and password='${password}'`).then(res => {
        data = res
    })
    if(data.length > 0){
        ctx.session = {}
        if(!ctx.cookies.get("watchSessionId")){
            const uuid = UUID.getUUID()
            ctx.cookies.set("watchSessionId", uuid, cookieConfig)
            ctx.session[uuid] = data[0].username
        }else{
            ctx.session[ctx.cookies.get("watchSessionId")] = data[0]
        }
        ctx.body = commonResponse.successResponse({
            username:data[0].username
        }, "登录成功")    
    }
    else{
        ctx.body = commonResponse.errorResponse("账号或者密码不正确")    
    }
})

userRouter.post("/logout", async (ctx) => {
    if(ctx.cookies.get("watchSessionId")){
        ctx.session[ctx.cookies.get("watchSessionId")] = null
        ctx.cookies.set("watchSessionId", '',{signed:false,maxAge:0})
        ctx.body = commonResponse.successResponse()
    }else{
        ctx.body = commonResponse.errorResponse()    
    }
})

userRouter.post("/getsession", async(ctx) => {
    if(ctx.session[ctx.cookies.get("watchSessionId")]){
        const data = ctx.session[ctx.cookies.get("watchSessionId")]
        ctx.body = commonResponse.successResponse({
            username:data.username
        })
    }else{
        ctx.body = commonResponse.errorResponse()
    }
})

userRouter.post("/getUserInfo", async(ctx) => {
    ctx.body = commonResponse.errorResponse("接口还未开发")
})


module.exports = userRouter