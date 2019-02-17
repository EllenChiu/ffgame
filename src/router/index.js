import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import doAnswerPage from '@/components/doAnswerPage'
import MetaInfo from 'vue-meta-info'
// import VueGoogleCharts from 'vue-google-charts'

Vue.use(Router)
Vue.use(MetaInfo)
Vue.use(VueResource)
// Vue.use(VueGoogleCharts), ghpage need not use history mode

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'indexPage',
      component: indexPage,
      metaTags: [
        {
          name: 'viewport',
          content: 'width=device-width, user-scalable=no'
        }
      ]
    },
    {
      path: '/doanswer',
      name: 'DoAnswer',
      component: doAnswerPage
    }
  ]
})
