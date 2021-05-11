const main = ()=> import('../views/main/main.vue')
const login = () => import("../views/login/login.vue") 
const home = () => import("../views/home/home.vue")
const performance = () => import("../views/performance/index.vue")
const errManage = () => import("../views/error/index.vue")
export default [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path:"/login",
    component: login
  },
  {
    path:"/main",
    component: main,
    children:[
      {
        path:"",
        component:home
      },
      {
        path:"performance",
        component:performance
      },
      {
        path:"errManage",
        component:errManage
      }
    ]
  },
]
