import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'
import {middlewares} from "./assets/js/routerMiddlewares";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/error'
        },

        {
            path: '/error',
            name: 'error',
            component: () => import('./views/Error.vue'),
            meta: {
                layout: 'home'
            }
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
            path: '/student/:id/edit',
            name: 'edit',
            component: () => import('./views/Edit.vue'),
            beforeEnter: middlewares.isAuthenticated
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue'),
            beforeEnter: middlewares.isntAuthenticated
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
            beforeEnter: middlewares.isntAuthenticated

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
                    name: 't_login',
                    component: () => import('./views/teacher/Login.vue'),
                    meta: {
                        layout: 'teacher'
                    },
                    beforeEnter: middlewares.isntAuthenticated
                },
                {
                    path: 'join',
                    name: 't_join',
                    component: () => import('./views/teacher/Join.vue'),
                    meta: {
                        layout: 'teacher'
                    },
                    beforeEnter: middlewares.isntAuthenticated
                }
            ]
        }

    ]
})
