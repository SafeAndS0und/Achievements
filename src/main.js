import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import home from './layouts/home.vue'
import defaultL from  './layouts/default.vue'
import teacher from  './layouts/teacher.vue'
import Icon from 'vue-awesome/icons'
import axiosInstance from './assets/js/axiosInstance'
import bringBackUserData from './assets/js/onPageRefresh'

bringBackUserData()


//Layouts must be assigned globally
Vue.component('home-layout', home)
Vue.component('default-layout', defaultL)
Vue.component('teacher-layout', teacher)

//Prototype means we can use it globally
Vue.prototype.axios = axiosInstance

Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
