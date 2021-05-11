const sessionConfig = {
    key: 'watcher',        // cookie key (默认koa：sess)
    maxAge: 1000 * 24 * 3600,       // cookie的过期时间,毫秒，默认为1天
    overwrite: true,        // 是否覆盖    (默认default true)
    httpOnly: true,        // cookie是否只有服务器端可以访问,默认为true
    signed: true,           // 签名默认true
    rolling: false,         // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false,           // (boolean) 会话即将到期时,续订会话
};

const cookieConfig = {
    maxAge: 1000 * 3600 * 24,            
    expires: new Date(),        
    path: '/',                  
    domain: 'localhost',
    secure: false,
    httpOnly: true,           
    overwrite: true
}


module.exports = {
    sessionConfig,
    cookieConfig
}

