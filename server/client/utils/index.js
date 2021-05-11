import axios from "axios"

const instance = axios.create({
    baseURL:"/api/",
    timeout:5000,
    headers: {'Content-Type': 'application/json;charset=UTF-8'},
});

instance.interceptors.request.use((config) => {
    return config
},(error) => {
    console.log(error)
    return Promise.reject(error)
})


instance.interceptors.response.use((response) => {
    // hideLoading()
    const res = response.data
    if (res.code === 10000) {
      return res
    } else {
      if(res.code === 30000 && window.location.pathname !== "/login"){
         window.location.href = "/login"
      }
      return Promise.reject(res)
    }
},(error) => {
    console.log('err' + error) 
    return Promise.reject(error)
})


export default instance

