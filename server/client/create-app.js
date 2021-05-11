import Vue from "vue"
import App from './app.vue'
import Routes from 'vue-router'
import Vuex from 'vuex'
import createRouter from './router/index'
import createVuex from './store/index'
// import { Tree } from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css'  //不引入他的话就没有样式了

import './assets/styles/global.styl'

Vue.use(Routes)
Vue.use(Vuex)
// Vue.use(Tree)

export default () => {
    const router = createRouter()

    const store = createVuex()

    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })

    return { app, router, store }
}