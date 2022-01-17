import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import users from './modules/users'

const store = new Vuex.Store({
    state: {
      accessToken:'',
      user:null
    },
    mutations: {
      setUser(state,data){
        state.user = data
      },
      setAccessToken(state,data){
          state.accessToken = data
      },
    },
    modules:{
        users
    }
})

export default store