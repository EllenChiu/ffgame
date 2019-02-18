import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import doAnswerPage from '@/components/doAnswerPage'
import error404 from '@/components/error404'

// import VueGoogleCharts from 'vue-google-charts'

Vue.use(Router)
Vue.use(VueResource)
// Vue.use(VueGoogleCharts), ghpage need not use history mode

export default new Router({
  mode: 'history', // deploy to github should not history mode
  routes: [
    {
      path: '*',
      name: 'error404',
      component: error404
    },
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/doanswer',
      name: 'DoAnswer',
      component: doAnswerPage
    }
  ]
})
