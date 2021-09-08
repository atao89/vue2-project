/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-12 23:15:09
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-08 19:39:53
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = []

const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 如果是根目录的index.js、 不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /*
    * 兼容import export 和 require module.export 两种规范
  */
  routes = [...routes, ...(routerModule.default || routerModule)]
})
// console.log('+++++++++routes', routes)


// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: routes
// })


const asyncRouter = [] // 动态路由

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: [...routes, ...asyncRouter]
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) => {
  // console.log(to,from);
  if (to.path.indexOf('login') < 0 && !window.localStorage.getItem('USER_INFO')) {
    router.replace('/login');
    next();
  }
  next();
})

export default router
