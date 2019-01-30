import createApp from "./create-app"

const { app, router, store } = createApp()

//同步客户端和服务端的状态
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#root')
})