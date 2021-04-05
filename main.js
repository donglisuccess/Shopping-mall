import Vue from 'vue'
import App from './App'
import Toast from "./components/Toast/index.js";

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(Toast);

const app = new Vue({
    ...App
})
app.$mount()
