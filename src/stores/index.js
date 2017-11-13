import Vue from 'vue'
import Vuex from 'vuex'

import Users from './userStore'
import Items from './itemsStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Users,
    Items
  }
})

export default store
