<template>
    <div>
        <router-link to="/teacher" class="teacher">Nauczyciel?</router-link>

        <section class="search-area">

            <InPut :autofocus="autofocused" @focused="showStudents" @input="searchValue = $event"
                   placeholder="Znajdź siebie lub znajomego wpisując nick" :width="width" class="search"/>
            <div class="links">
                <router-link to="/join" v-if="!authenticated" class="register">Nie masz jeszcze konta?</router-link>
                <router-link to="/login" v-if="!authenticated" class="login">Mam już konto</router-link>
                <p @click="logout" v-if="authenticated" class="register">Wyloguj się</p>
            </div>
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
                searchValue: '',
                document: '',
                width: 35
            }
        },
        computed: {
            //Cale zamieszanie, aby focusowalo na input, po zmianie URL
            autofocused(){
                return this.$route.path.includes('student')
            },
            authenticated(){
                return this.$store.getters.authenticated
            }
        },
        methods: {
            showStudents(){
                this.$router.push({name: 'student'})
            },
            logout(){
                import('../assets/js/logout.js')
                    .then(module =>{
                        module.default()
                            .then(() => this.$router.push({name: 'home'}))
                            .catch(err => console.log(err))
                    })
            }
        }


    }
</script>

<style scoped lang="scss">

    @import '../assets/css/variables.scss';

    .teacher {
        position: fixed;
        top: 0;
        right: 0;
        padding: 30px;
        color: #5a575a;
        transition: 200ms;
        text-decoration: none;
    }

    .teacher:hover {
        background-color: $lightBlue;
        color: #ffffff;
        cursor: pointer;
    }

    .search-area {
        width: 100%;
        height: 340px;
        display: grid;
        grid-template-rows: 2fr 0.5fr;
        grid-gap: 10px;

        .links {

            margin: 0 auto;
            width: 32%;
            .register {
                height: auto;
                color: #5a575a;
                text-decoration: none;
                text-align: center;
                transition: 100ms;
                padding: 5px;
                display: block;
                margin-top: 10px;
                margin-bottom: 15px;
                cursor: pointer;

            }
            .register:hover {
                color: $darkBlue;
            }

            .login {
                text-align: center;
                display: block;
                height: auto;
                color: #5a575a;
                text-decoration: none;
                transition: 100ms;
                padding: 5px;

            }
            .login:hover {
                color: $darkBlue;
            }
        }

        .search {
            align-self: end;
            margin: 0 auto;
            width: 33%;
        }

    }

    .result-area {
        width: 100%;
        height: auto;
    }

    /* MOBILE */

    @media only screen and (max-width: $tablet) {
        .search-area {

            .search {
                width: 60%;
            }
        }
    }

    @media only screen and (max-width: $mobile) {
        .search-area {

            .search {
                width: 90%;
            }
        }
    }
</style>