import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 这里注册一个总线
Vue.prototype.$bus = new Vue();

const app = new Vue({
    ...App
})
app.$mount()
