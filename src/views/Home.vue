<template>
    <div>
        <router-link to="/teacher" class="teacher">Nauczyciel?</router-link>
        <section class="search-area">
            <InPut :autofocus="autofocused" @focused="showStudents" @input="searchValue = $event"
                   placeholder="Znajdź siebie lub znajomego wpisując nick" :width="35" class="search"/>
            <router-link to="/join" class="register">Nie masz jeszcze konta?</router-link>
        </section>

        <section class="result-area">
            <router-view :searchValue="searchValue"/>
        </section>
    </div>
</template>

<script>

    import InPut from '../components/partials/InPut.vue'

    export default {
        name: "Home",
        components: {
          InPut
        },
        data(){
            return {
                searchValue: ''
            }
        },
        computed: {
            //Cale zamieszanie, aby focusowalo na input, po zmianie URL
            autofocused(){
                return this.$route.path.includes('student')
            },
        },
        methods: {
            showStudents(){
                this.$router.push({name: 'student'})
            },
            fetchData(){
                // this.axios.get('https://jsonplaceholder.typicode.com/todos/1')
                //     .then(res => console.log(res.data))
            }
        },
        created(){
            this.fetchData()
        }

    }
</script>

<style scoped lang="scss">

    @import '../assets/css/variables.scss';

    .teacher{
        position: fixed;
        top: 0;
        right: 0;
        padding: 30px;
        color: #5a575a;
        transition: 200ms;
        text-decoration: none;
    }
    .teacher:hover{
        background-color: $lightBlue;
        color: #ffffff;
        cursor: pointer;
    }

    .search-area {
        width: 100%;
        height: 300px;
        display: grid;
        grid-template-rows: 2fr 0.5fr;
        grid-gap: 10px;

        .register{
            margin-left: auto;
            margin-right: auto;
            height: auto;
            color: #5a575a;
            text-decoration: none;
            transition: 100ms;
            padding: 3px;
        }
        .register:hover{
            color: $darkBlue;
        }

        .search{
            align-self: end;
        }

    }
    .result-area {
        width: 100%;
        height: auto;
    }


    /* MOBILE */

    @media only screen and (max-width: $mobile) {
        .search-area {
            input {
                width: 85%;
            }
        }
    }
</style>