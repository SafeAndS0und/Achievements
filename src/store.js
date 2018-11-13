import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from './store_modules/currentUser'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        currentUser: currentUser
    },
    state: {},
    mutations: {},
    actions: {}
})
