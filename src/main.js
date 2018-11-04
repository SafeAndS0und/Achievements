import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import home from './layouts/home.vue'
import defaultL from  './layouts/default.vue'
import teacher from  './layouts/teacher.vue'
import Icon from 'vue-awesome/icons'

//Globalne przypisanie layoutów
Vue.component('home-layout', home)
Vue.component('default-layout', defaultL)
Vue.component('teacher-layout', teacher)

//prototype oznacza ze możemy potem używać globalnie
Vue.prototype.axios = axios


Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
