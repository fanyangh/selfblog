import Vue from 'vue'
import Router from 'vue-router'
//懒加载，有效降低打包单个文件体积，按需加载
import index from './index/index' ;       //首页路由模块
import unkonwn from './noFound/index';    //404模块
import life from './life/index'  ;        //关于生活模块
import about from './about/index';        //关于我模块（轻爱好）
import read from './read/index' ;         //金典引用（博客）
import say from './say/index';            //留言模块
import time from './time/index';          //时间轴模块
import technology from './technology/index';   //技术
import demo from './demo/index';    //demo
import demoArr from './demo/index';

Vue.use(Router)
let router = new Router({
  routes: [
    ...index,
    ...life,
    ...about,
    ...read,
    ...say,
    ...time,
    ...unkonwn,
    ...technology,
    ...demo
  ]
})
// router.beforeEach((to, from, next) => {
//   //to即将进入的目标路由对象，from当前导航正要离开的路由， next  :  下一步执行的函数钩子
//   if (to.path === '/login') {
//     next()
//   } // 如果即将进入登录路由，则直接放行
//   else { //进入的不是登录路由
//     if (to.meta.requiresAuth && !sessionStorage.getItem('accessToken')) {
//       next({
//         path: '/login'
//       })
//     }
//     //下一跳路由需要登录验证，并且还未登录，则路由定向到  登录路由
//     else {
//       next()
//     }
//   } //如果不需要登录验证，或者已经登录成功，则直接放行
// })
export default router;

