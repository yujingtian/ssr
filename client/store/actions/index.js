const fetchBar = (newName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(newName)
    }, 2000);
  })
}
export default {
  changeName({commit},newName){
    return fetchBar(newName).then((res)=>{
      commit("changeName", res)
    })
  }
}