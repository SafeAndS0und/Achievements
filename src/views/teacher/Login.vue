<template>
    <div>
        <InPut :width="100" :height="15" class="search" placeholder="Nazwa Użytkownika" @input="username = $event"/>
        <InPut type="password" :height="15" class="search" placeholder="Hasło" @input="password = $event" @keydown.enter.native="login"/>
        <Button text="Zaloguj" :height="40" :font-size="18" class="login-button" @click.native="login"/>

        <transition name="fade">
            <p class="error" v-if="errorMsg">{{errorMsg}}</p>
        </transition>
    </div>
</template>

<script>
    import InPut from '../../components/partials/InPut.vue'
    import Button from '../../components/partials/Button.vue'
    export default {
        name: "Login",
        components:{InPut, Button},
        data(){
            return {
                username: '',
                password: '',
                errorMsg: ''
            }
        },
        methods:{
            login(){
                this.errorMsg = ''
                this.axios.post('http://localhost:3000/teachers/login', {
                    username: this.username,
                    password: this.password
                })
                    .then(res =>{
                        if(res.data.logged){
                            this.$router.push('/')
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

    @import '../../assets/css/variables.scss';

    .login-button{
        padding: 0 12px;
    }

    .search{
        width: 98%;
    }

    .error {
        margin-top: 8px;
        text-align: center;
        font-size: 15px;
        color: #810702;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>