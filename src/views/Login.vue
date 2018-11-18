<template>
    <div class="container">
        <div class="form">
            <h1>Logowanie</h1>
            <InPut placeholder="Nazwa Użytkownika" class="search" @input="username = $event" :height="23"/>
            <InPut placeholder="Hasło" type="password" class="search" @input="password = $event" :height="23"
                   @keydown.enter.native="login"/>
            <Icon name="arrow-right" scale="2" @click.native="login" class="arrow"/>

            <transition name="fade">
                <p class="error" v-if="errorMsg">{{errorMsg}}</p>
            </transition>
        </div>
    </div>
</template>

<script>

    import Icon from 'vue-awesome/components/Icon'
    import InPut from '../components/partials/InPut.vue'

    export default {
        name: "Login",
        components: {
            InPut,
            Icon
        },
        data(){
            return {
                username: '',
                password: '',
                errorMsg: ''
            }
        },
        methods: {
            login(){
                this.errorMsg = ''

                this.axios.post('students/login', {
                    username: this.username,
                    password: this.password
                })
                    .then(res =>{
                        if(res.data.logged){
                            // The first request is done, we've got basic data and token, fill the store
                            this.$store.dispatch('fillJWT', {
                                username: res.data.username,
                                token: res.data.token,
                                isTeacher: res.data.isTeacher
                            })


                            this.axios.get('profiles/' + this.username)
                                .then(res => {
                                    //Fill the store with user info to make it global
                                    this.$store.dispatch('fill', {
                                        name: res.data[0].student.name,
                                        surname: res.data[0].student.surname,
                                        description: res.data[0].description,
                                        contactEmail: res.data[0].contactEmail,
                                        phone: res.data[0].phone,
                                        facebook: res.data[0].facebook
                                    })
                                    this.$router.push(`/student/${this.username}`)
                                })
                                .catch(err => console.log(err))
                        }
                    })
                    .catch(err =>{
                        this.errorMsg = err.response.data.msg
                    })
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/variables.scss';

    .container {
        padding: 0;
        margin: 0;
        display: grid;
        width: 100%;
        height: 100vh;
        .form {
            align-self: center;
            justify-self: center;
            width: 30%;

            h1 {
                font-weight: lighter;
                padding: 20px;
                text-align: center;
                font-size: 27px;
                letter-spacing: 4px;
                color: #000000;
            }

            .search {
                width: 100%;
            }

            .arrow {
                color: #a1a1a1;
                display: block;
                padding: 15px 15px;
                margin: 0 auto;
                transition: 250ms;
                cursor: pointer;
            }

            .arrow:hover {
                color: $mainBlue;
            }

            .error {
                margin-top: 6px;
                text-align: center;
                font-size: 15px;
                color: #810702;
            }
        }
    }

    @media only screen and (max-width: $mobile) {
        .container {
            .form {
                width: 90%;
            }
        }

    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>