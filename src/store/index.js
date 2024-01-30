import Vue from 'vue'
import Vuex from 'vuex'
import options from './options'
// import getter from './getter'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {},
  modules: {
    options,
    getters() {
      getter
    },
  },
  // getters: {
  //   ...getter
  // },
})
