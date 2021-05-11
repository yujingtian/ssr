const Router = require("koa-router") 
const query = require("../db")
const commonResponse = require("../commonResponse")
const { formatDate } = require("../utils") 

const performanceRouter = new Router()
const systemCodeStr = [null, "车贷", "星驰"]

performanceRouter.post("/list",async (ctx) => {
    const params = ctx.request.body
    const renderType = params.renderType
    let condition = []
    let data = []
    let returnData = {
        renderName:null,
        renderTime:null,
        filePath:null,
        environment:null,
        systemcode:null,
        createtime:null,
    }
    let sql = "select * from performance_record"
    if(renderType){
        condition.push("render_type='" + renderType + "'")
    }
    if(condition.length > 0){
        sql += " where "
        condition.forEach((item, index)=> {
            sql += item
            if(index !== condition.length - 1){
                sql += "and "
            }
        })
    }
    await query(sql).then(res => {
        if(res.length > 0){
            res.forEach(item => {
                let copyData = JSON.parse(JSON.stringify(returnData))
                
                for(key in copyData){
                    if(key == "createtime"){
                        item[key] = formatDate(item[key])
                    }
                    if(key == "systemcode" && item[key]){
                        item[key] = systemCodeStr[item[key]]
                    }
                    copyData[key] = item[key] || item[key.replace(/[A-Z]{1}/g,function(word){return "_" + word.toLowerCase()})] || ""
                }
                data.push(copyData)
            })
        }
    }).catch(err => {
        console.log(err)
        ctx.body = commonResponse.errorResponse("接口调用失败")
    })
    ctx.body = commonResponse.successResponse(data)
})
const renderTypeStr = [null, "首屏渲染"]
performanceRouter.post("/sendPerformaceInfo", async (ctx) => {
    const params = ctx.request.body
    const renderType = params.renderType
    const renderName = renderTypeStr[renderType]
    const filePath = params.filePath
    const renderTime = params.renderTime
    const environment = params.environment
    const systemcode = params.systemcode

    await query(`INSERT INTO performance_record (render_type, render_name, render_time, filePath, environment, systemcode) VALUES 
     ('${renderType}','${renderName}','${renderTime}','${filePath}','${environment}','${systemcode}');`)
    .then(res => {
            ctx.body = commonResponse.successResponse()
        }).catch(err => {
            console.log(err)
            ctx.body = commonResponse.errorResponse("接口调用失败")
        })
})


module.exports = performanceRouter