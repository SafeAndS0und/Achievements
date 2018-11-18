import axiosInstance from './axiosInstance'
import store from "../../store";

// Fill token after refreshing the page
export default function() {
    store.dispatch('fillJWTAfterRefresh', {
        token: localStorage.getItem('token'),
        username: localStorage.getItem('username'),
        isTeacher: localStorage.getItem('isTeacher')
    })
        .then(() => {
            // If there was a user signed in before the refresh
            if(store.getters.authenticated){

                //Request also the profile, to fill the store
                axiosInstance.get('profiles/' + store.state.currentUser.username)
                    .then(res => {
                        //Fill the store with user info to make it global
                        store.dispatch('updateTheProfile', {
                            description: res.data[0].description,
                            contactEmail:  res.data[0].contactEmail,
                            phone:  res.data[0].phone,
                            facebook:  res.data[0].facebook
                        })
                    })
                    .catch(err => console.log(err))

            }
        })
}




