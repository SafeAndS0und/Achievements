<template>
    <div>
        <InPut placeholder="Nazwa Użytkownika" class="search" :height="15" @input="username = $event"/>
        <InPut placeholder="Hasło" class="search" type="password" :height="15" @input="password = $event"/>
        <InPut placeholder="Imię" class="search" :height="15" @input="name = $event"/>
        <InPut placeholder="Nazwisko" class="search" :height="15" @input="surname = $event"
               @keydown.enter.native="register"/>

        <Button text="Dołącz" :width="100" :height="40" :font-size="18" @click.native="register" class="login-button"/>
        <transition name="fade">
            <p class="error" v-if="errorMsg" v-html="errorMsg"></p>
        </transition>
    </div>
</template>

<script>
    import InPut from '../../components/partials/InPut.vue'
    import Button from '../../components/partials/Button.vue'

    export default {
        name: "Join",
        components: {InPut, Button},
        data(){
            return {
                username: '',
                password: '',
                name: '',
                surname: '',
                errorMsg: ''
            }
        },
        methods: {
            register(){
                this.errorMsg = ''
                this.axios.post('http://localhost:3000/teacher/register', {
                    username: this.username,
                    password: this.password,
                    name: this.name,
                    surname: this.surname
                })
                    .then(res =>{
                        if(res.data.registered){
                            this.$router.push('/')
                        }
                    })
                    .catch(err =>{
                        err.response.data.validationErrors.forEach((err, index) => this.errorMsg += index + 1 + '. ' + err + '<br/>')
                    })
            }
        }

    }
</script>

<style scoped lang="scss">
    @import '../../assets/css/variables.scss';

    .login-button {
        padding: 0 12px;
    }

    .search{
        width: 110%;
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