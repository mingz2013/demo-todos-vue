// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import store from './store'

import App from './components/App'

Vue.use(VueAxios, axios)
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
