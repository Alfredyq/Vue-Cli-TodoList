import Vue from 'vue'
import VueRouter from 'vue-router'



// const Home = () => import('../components/Home');
// const HomeNews = () => import('../components/HomeNews');
// const HomeMessage = () => import('../components/HomeMessage');
// const About = () => import('../components/About');
// const User = () => import('../components/User');
// const Profile = () => import('../components/Profile');
const All = () => import('../components/All');
const Undone = () => import('../components/Undone');
const Done = () => import('../components/Done');

// 1、通过Vue.use(插件)，安装插件
Vue.use(VueRouter);

// 配置路由和组件之间的应用关系
const routes = [
      {
          path: '/',
          // redirect重定向
          redirect: '/undone'
      },{
        path: '/all',
        name: 'All',
        component: All,
        props: { default: true, sidebar: false }
      },
      {
        path: '/undone',
        name: 'Undone',
        component: Undone
      },
      {
        path: '/done',
        name: 'Done',
        component: Done
      }
];

// 创建VueRouter实例对象
const router = new VueRouter({
    routes,
    // 将URL的hash模式改成HTML5的history模式，默认情况下，路径的改变使用的是URL的hash
    mode: 'history'
});

// 前置守卫（guard），在路由跳转之前进行回调
router.beforeEach((to, from, next) => {
    // 从from跳到to
    // console.log(to);
    console.log('----');
    // document.title = to.name;
    document.title = to.matched[0].name;
    next();
});

// 后置钩子（hook），只有两个参数，因为已经跳转回来了，所以不需要调用next()函数
router.afterEach((to, from) =>{
    console.log('++++');
});

// 将router对象传到Vue实例
export default router
