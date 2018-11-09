import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const fetchBar = ()=>{
    console.log("函数执行了")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           console.log(111111)
           resolve("bar组件返回数据了")
        },1000);
    })
}

function createStore(){
    const store = new Vuex.Store({
        state:{
            bar:''
        },
        mutations:{
            'SET_BAR'(state,data){
                console.log("data:",data)
                state.bar = data;
            }
        },
        actions:{
            fetchBar({commit}){
                console.log("状态被接受了")
                return fetchBar().then(res=>{
                    commit('SET_BAR', res)
                }).catch(err=>{
                    console.error(err)
                })
            }
        }
    })

    if(typeof window !== 'undefined' && window.__INITIAL_STATE__){
        console.log('window.__INITIAL_STATE__',window.__INITIAL_STATE__);
        store.replaceState(window.__INITIAL_STATE__)
    } else {
        console.log('no browser');
    }

    return store;
}

export default createStore

typeof window