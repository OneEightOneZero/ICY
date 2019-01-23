import Vue from 'vue'
import App from './App.vue'

//引入mintui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')