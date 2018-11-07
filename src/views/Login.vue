<template>
    <div class="container">
        <div class="form">
            <InPut placeholder="Nazwa Użytkownika" @input="username = $event" :width="100" :height="30"/>
            <InPut placeholder="Hasło" @input="password = $event" :width="100" :height="30"/>
            <Icon name="arrow-right" scale="2" @click.native="login" class="arrow"/>
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
            }
        },
        methods: {
            login(){
                console.log(this.username, this.password)
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

            .arrow{
                color: #a1a1a1;
                display: block;
                padding: 15px 15px;
                margin: 0 auto;
                transition: 250ms;
                cursor: pointer;
            }

            .arrow:hover{
                color: $mainBlue;
            }
        }
    }

</style>