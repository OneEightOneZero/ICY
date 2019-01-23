import Vue from 'vue'

// 全局样式
import './styles/app.css'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')