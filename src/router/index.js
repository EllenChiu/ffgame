import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import openVideoPage from '@/components/openVideoPage'
import doAnswerPage from '@/components/doAnswerPage'
// import VueGoogleCharts from 'vue-google-charts'

Vue.use(Router)
// Vue.use(VueGoogleCharts)

export default new Router({
  // mode: 'history',  //ghpage need not use history mode
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/storybegin',
      name: 'openVideo',
      component: openVideoPage
    },

    {
      path: '/doanswer',
      name: 'DoAnswer',
      component: doAnswerPage
    }
  ]
})
