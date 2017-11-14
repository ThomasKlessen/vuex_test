// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './stores'
import Vuetify from 'vuetify'
// eslint-disable-next-line no-unused-vars
import VueMaterialCss from 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
