import Vue from 'vue'  
import App from './app.vue' 
import Routes from 'vue-router'
import Vuex from 'vuex'
import createRouter from './router/index' 
import createVuex from './store/index'

import './assets/styles/global.styl'

Vue.use(Routes)
Vue.use(Vuex)

const router = createRouter()
const store = createVuex()
const root = document.createElement('div')  
document.body.appendChild(root);            

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount(root)