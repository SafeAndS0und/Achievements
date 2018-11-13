
export default {
    state: {
        username: '',
        name: '',
        surname: '',
        description: '',
        contactEmail: '',
        phone: '',
        facebook: '',
    },
    mutations: {
        fill(state, payload){
            state.username = payload.username
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
        }
    },
    actions: {
        fill({commit}, payload){
            commit('fill', payload)
        },
        updateTheProfile({commit}, payload){
            commit('updateTheProfile', payload)
        }
    }
}