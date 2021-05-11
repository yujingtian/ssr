const UUID = require("uuid")

function getUUID(){
    return UUID.v1()
}

function formatDate(date, timer=true){
    let formatDate
    if(date instanceof Date){
        formatDate = date
    }else{
        formatDate = new Date(date)
    }
    var year = formatDate.getFullYear()
    var month = formatDate.getMonth() + 1
    var day = formatDate.getDate()
    if(timer){
        var hour = formatDate.getHours()
        var minutes = formatDate.getMinutes()
        var seconds = formatDate.getSeconds()
        if(hour < 10){
            hour = "0" + hour
        }
        if(minutes < 10){
            minutes = "0" + minutes
        }
        if(seconds < 10){
            seconds = "0" + seconds
        }
        return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds
    }
    return year + "-" + month + "-" + day
}

module.exports = {
    getUUID,
    formatDate
}