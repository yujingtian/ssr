import http from "../utils"

export function login(data){
    return http.request({
        url: "user/login",
        method: "post",
        data:data
    })
}

export function getSession(){
    return http.request({
        url: "user/getsession",
        method: "post"
    })
}

export function getUserInfo(){
    return http.request({
        url: "user/getUserInfo",
        method: "post"
    })
}

export function getErrmanage(data){
    return http.request({
        url: "errManage/list",
        method: "post",
        data:data
    })
}

export function getPerformance(data){
    return http.request({
        url: "performance/list",
        method: "post",
        data:data
    })
}