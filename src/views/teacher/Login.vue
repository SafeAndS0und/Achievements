<template>
    <div>
        <InPut :width="100" :height="15" placeholder="Nazwa Użytkownika"/>
        <InPut type="password" :width="100" :height="15" placeholder="Hasło"/>
        <Button text="Zaloguj" :width="100" :height="40" :font-size="18" class="login-button"/>
    </div>
</template>

<script>
    import InPut from '../../components/partials/InPut.vue'
    import Button from '../../components/partials/Button.vue'
    export default {
        name: "Login",
        components:{InPut, Button}
    }
</script>

<style scoped lang="scss">

    @import '../../assets/css/variables.scss';

    .login-button{
        padding: 0 12px;
    }
</style>