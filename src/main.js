import Vue from 'vue'

// 全局样式
import './styles/app.css'
import App from './App.vue'

//引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//引入axios模块
import axios from "axios"
//把axios绑到Vue的原型上
Vue.prototype.axios = axios

//把服务器端口号绑到原型
Vue.prototype.host = "http:\/\/localhost:3000"

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


// 把库挂载到原型链
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')