import App from './App'
import store from "./store"
// #ifndef VUE3
import Vue from 'vue'
// 引入uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

// 引入VueX
Vue.prototype.$store = store
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif