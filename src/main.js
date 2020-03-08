import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
require('dotenv').config()

import App from './App.vue'
import { routes } from './routes'
import store from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)
console.log(process.env)
Vue.http.options.root = process.env.VUE_APP_FIREBASE_ROOT

Vue.filter('currency', (value) => {
   return '$' + value.toLocaleString()
});

Vue.config.productionTip = false

const router = new VueRouter({
   mode: 'history',
   routes
})

new Vue({
   render: h => h(App),
   router,
   store
}).$mount('#app')
 