import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.config.productionTip = false

var global_axios_api = 'http://127.0.0.1:8000/api'

Vue.use(PaperDashboard);

new Vue({
  router,
  store,
  created () {
    const userInfo = localStorage.getItem('user')
    if (userInfo) {
      const userData = JSON.parse(userInfo)
      this.$store.commit('setUserData', userData)
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
