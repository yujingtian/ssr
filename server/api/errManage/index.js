const Router = require("koa-router") 
const query = require("../db")
const commonResponse = require("../commonResponse")
const { formatDate } = require("../utils") 

const errManageRouter = new Router()
const systemCodeStr = [null, "车贷", "星驰"]

errManageRouter.post("/list",async (ctx) => {
    const params = ctx.request.body
    const errorMessage = params.errorMessage
    const scriptURI = params.scriptURI
    let condition = []
    let data = []
    let returnData = {
        errorMessage:null,
        scriptURI:null,
        lineNo:null,
        columnNo:null,
        error:null,
        environment:null,
        systemcode:null,
        createtime:null,
    }
    let sql = "select * from error_record"
    if(errorMessage){
        condition.push("error_message like '%" + errorMessage + "%'")
    }
    if(scriptURI){
        condition.push("scriptURI like '%" + scriptURI + "%'")
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

errManageRouter.post("/senderror", async (ctx) => {
    const params = ctx.request.body
    const errorMessage = params.errorMessage
    const scriptURI = params.scriptURI
    const lineNo = params.lineNo || null
    const columnNo = params.columnNo || null
    const error = params.error
    const environment = params.environment
    const systemcode = params.systemcode

    await query(`INSERT INTO error_record (error_message, scriptURI, lineNo, columnNo, error, environment, systemcode) VALUES 
     ('${errorMessage}','${scriptURI}',${Number(lineNo)},${Number(columnNo)},'${error}','${environment}','${systemcode}');`)
    .then(res => {
            ctx.body = commonResponse.successResponse()
        }).catch(err => {
            console.log(err)
            ctx.body = commonResponse.errorResponse("接口调用失败")
        })
})


module.exports = errManageRouter