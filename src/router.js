import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                layout: 'home'
            },
            children: [
                {
                    path: 'student',
                    name: 'student',
                    component: () => import('./views/Student.vue'),
                    meta: {
                        layout: 'home'
                    },
                }
            ]
        },

        {
            path: '/student/:id',
            name: 'singleStudent',
            component: () => import('./views/SingleStudent.vue'),
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        },
        {
            path: '/teacher',
            name: 'teacher',
            component: () => import('./views/teacher/Teacher-Home.vue'),
            meta: {
                layout: 'teacher'
            },
            children: [
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('./views/teacher/Login.vue'),
                    meta: {
                        layout: 'teacher'
                    }
                },
                {
                    path: 'join',
                    name: 't_join',
                    component: () => import('./views/teacher/Join.vue'),
                    meta: {
                        layout: 'teacher'
                    }
                }
            ]
        }

    ]
})
