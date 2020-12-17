import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: false
  },
  mutations: {
    setAuth(state){
      state.auth = true;
    },
    disableAuth(state){
      state.auth = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
