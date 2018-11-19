import axiosInstance from '../assets/js/axiosInstance'

export default {
    state: {
        username: '',
        name: '',
        surname: '',
        description: '',
        contactEmail: '',
        phone: '',
        facebook: '',
        token: '',
        isTeacher: ''

    },
    getters: {
        authenticated: state => !!state.token
    },
    mutations: {
        fillJWTAfterRefresh(state, payload){
            state.token = payload.token
            state.username = payload.username
            state.isTeacher = payload.isTeacher
        },
        fillJWT(state, payload){
            state.token = payload.token
            state.username = payload.username
            state.isTeacher = payload.isTeacher

            //Add the data to localstorage to keep it after refreshing the page
            localStorage.setItem('token', state.token)
            localStorage.setItem('username', state.username)
            localStorage.setItem('isTeacher', state.isTeacher)

            //change the default header for authorization on backend
            axiosInstance.defaults.headers.common['Authorization'] = state.token
        },
        fill(state, payload){
            state.name = payload.name
            state.surname = payload.surname
            state.description = payload.description
            state.contactEmail = payload.contactEmail
            state.phone = payload.phone
            state.facebook = payload.facebook
        },
        updateTheProfile(state, payload){
            state.description = payload.description
            state.contactEmail = payload.contactEmail
            state.phone = payload.phone
            state.facebook = payload.facebook
        },
        clear(state){
            // Iterate over every object's key and clear its value
            Object.keys(state).forEach(key => state[key] = '')
        }
    },
    actions: {
        fill({commit}, payload){
            commit('fill', payload)
        },
        updateTheProfile({commit}, payload){
            commit('updateTheProfile', payload)
        },
        fillJWT({commit}, payload){
            commit('fillJWT', payload)
        },
        fillJWTAfterRefresh({commit}, payload){
            commit('fillJWTAfterRefresh', payload)
        },
        clear({commit}){
            commit('clear')
        }
    }
}