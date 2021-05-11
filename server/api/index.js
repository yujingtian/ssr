const Router = require("koa-router") 
const userRouter = require("./user")
const errManageRouter = require("./errManage")
const performanceRouter = require("./performanceManage")

const apiRouter = new Router({
    prefix:"/api"
})


apiRouter.use("/user", userRouter.routes(), userRouter.allowedMethods())
apiRouter.use("/errManage", errManageRouter.routes(), errManageRouter.allowedMethods())
apiRouter.use("/performance", performanceRouter.routes(), performanceRouter.allowedMethods())


module.exports = apiRouter
