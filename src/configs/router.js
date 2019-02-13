// 路由配置
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)
    // 一层
    // 首页路由
    //移入一层路由
import App from '../App.vue'

//引入二层路由
//引入组件
//style页面
import Style from '../pages/Style.vue'
// icon页面
import Icon from '../pages/Icon.vue'
//shop页面
import Shop from '../pages/Shop.vue'
// me页面
import Me from '../pages/Me.vue'

import Mine from '../pages/Mine.vue'


// 配置路由
const routes = [{
        path: '/app',
        // 路由命名，方便跳转
        name: 'app',
        component: App,
        children: [
            //嵌套路由里面的path要删除
            {
                path: 'style',
                name: 'style',
                component: Style
            },
            {
                path: 'icon',
                name: 'icon',
                component: Icon
            },
            {
                path: 'shop',
                name: 'shop',
                component: Shop
            },
            {
                path: 'me',
                name: 'me',
                component: Me
            },
            {
                path: 'mine',
                name: 'mine',
                component: Mine
            }
        ]
    }, // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'style'
        }
    }
]


// 实例该路由配置
const router = new VueRouter({
        // h5history路由模式
        // 有兼容性的问题
        // mode: 'history',
        // 建议用默认的哈希模式
        mode: 'hash',
        routes // (缩写) 相当于 routes: routes
    })
    // 路由守卫
    // router.beforeEach((to, from, next) => {
    //     let token = localStorage.getItem("token");
    //     // 如果token是123456的话进去目标页面，否则返回'/sign'页面
    //     if (token == 123456 || to.path == '/sign') {
    //         next()
    //     } else {
    //         // console.log(to.path,from)
    //         // 如果失败跳转登录页面
    //         router.push({
    //             name: "sign"
    //         })
    //         // console.log('登录失败')
    //     }
    //     // setTimeout(()=>{
    //     //     next()
    //     // },3000)
    // })
export default router