<template>
    <div id="app">

        <!-- Tu sie wyrenderuje layout, który jest ustalany za pomoca computed 'layout', który natomiast generowany jest na podstawie
        meta tagu w router.js
        Home ma przypisany meta tag layout: 'home', więc komponentem layoutowym będzie home.vue
        Jest on jednak przypisany w main.js jako home-layout, stąd też w computed dodajemy ten przyrostek
        -->
        <component :is="layout">
            <router-view/>
        </component>

    </div>
</template>
<script>
    export default {
        computed: {
            layout(){
                return (this.$route.meta.layout || 'default') + '-layout'
            }
        }
    }
</script>
<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Didact+Gothic');

    body, *{
        padding: 0;
        margin: 0;
        font-family: 'Didact Gothic', sans-serif;
    }
    body{
        background-color: white;
    }

    #app{
        font-family: 'Didact Gothic', sans-serif;
    }
</style>
