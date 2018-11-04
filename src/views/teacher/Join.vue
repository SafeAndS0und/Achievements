<template>
    <div>
        <InPut placeholder="Nazwa Użytkownika" :width="100" :height="15"/>
        <InPut placeholder="Hasło" :width="100" type="password" :height="15"/>
        <InPut placeholder="Imię" :width="100" :height="15"/>
        <InPut placeholder="Nazwisko" :width="100" :height="15"/>
        <Button text="Dołącz" :width="100" :height="40" :font-size="18" class="login-button"/>
    </div>
</template>

<script>
    import InPut from '../../components/partials/InPut.vue'
    import Button from '../../components/partials/Button.vue'
    export default {
        name: "Join",
        components:{InPut, Button}
    }
</script>

<style scoped lang="scss">
    @import '../../assets/css/variables.scss';

    .login-button{
        padding: 0 12px;
    }
</style>