let commResponse = new Object()

commResponse.successResponse = function(data = {},  message = "成功", code = 10000 ){
    return {
        data,
        message,
        code
    }
}

commResponse.errorResponse = function(message = "失败", code = 20000){
    return {
        message,
        code
    }
}

module.exports = commResponse