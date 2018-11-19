import store from '../../store'

export const middlewares = {
    isAuthenticated(to, from, next){
        if(store.getters.authenticated){
            next()
        } else{
            next('/error')
        }
    },

    isntAuthenticated(to, from, next){
        if(!store.getters.authenticated){
            next()
        } else{
            next('/error')
        }
    }
}