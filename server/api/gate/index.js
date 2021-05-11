const UUID = require("../utils")
const commonResponse = require("../commonResponse")
const { cookieConfig } = require("../config")


function checkCookie(ctx, next){
    const cookie = ctx.cookies.get("watchSessionId")
    if(cookie === null || cookie === undefined){
        if(ctx.path == "/api/user/login"){
            return true
        }
        setCookie(ctx)
        return false
    }else{
        if(ctx.path == "/api/user/login"){
            return true
        }
        if(!ctx.session[cookie]){
            ctx.body = commonResponse.errorResponse("session失效", 30000)
            ctx.status = 200
            return false
        }
        
        return true
    }
}

function setCookie(ctx){
    const uuid = UUID.getUUID()
    ctx.cookies.set("watchSessionId", uuid, cookieConfig)
    ctx.body = commonResponse.errorResponse("session失效", 30000)
    ctx.status = 200
}

module.exports = {
    checkCookie
}