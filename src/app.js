import Vue from 'vue'
import App from './App.vue'
import createRouter  from "./router"
import createStore from './store/store.js'


export function createApp(){
    let store = createStore()
    let router = createRouter()
    let app = new Vue({
        store,
        router,
        render:h=>h(App)
    })
    return { app, store, router, App};
}
