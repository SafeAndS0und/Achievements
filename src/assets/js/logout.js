import store from '../../store'

export default function(){
    return new Promise((resolve, reject) =>{
        store.dispatch('clear')
            .then(() =>{
                localStorage.clear()
                resolve({msg: 'its clear'})
            })
            .catch(err => reject(err))
    })

}