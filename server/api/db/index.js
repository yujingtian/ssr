const mysql = require("mysql")

let pools = {}

let query = (sql, host = "127.0.0.1") => {
    if(!pools.hasOwnProperty(host)){
        pools[host] = mysql.createPool({
            host:host,
            port:"3306",
            user:"root",
            password:"root",
            database:"watch"
        })
    }
    return new Promise((resolve, reject) => {
        pools[host].getConnection((err, connection) => {
            if(err){
                console.log(err, '数据库连接失败')
                reject(err)
            }
            else{
                connection.query(sql, (err, results) => {
                    connection.release()
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(results)
                    }
                })
            }
        })
    })
}

module.exports = query