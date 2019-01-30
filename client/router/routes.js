const app = ()=> import('../views/todos/todo.vue')
const login = () => import("../views/login/login.vue") 
export default [
  {
    path: "/",
    component: app
  },
  {
    path:"/app",
    component: app
  },
  {
    path:"/login",
    component: login
  }
]
