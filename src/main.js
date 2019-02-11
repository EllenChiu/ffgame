// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './bootstrap'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  http: {
    root: './root',
    headers: {
      'Content-Range': 'bytes=0-5079413',
      'Accept-Ranges': 'bytes',
      'Content-Type': 'video/mp4'
    }
  }
})
