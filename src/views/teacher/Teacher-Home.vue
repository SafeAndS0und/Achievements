<template>
    <div class="teacher-home-container">
        <section>


            <router-view v-if="$route.path.includes('join')" class="join"></router-view>

            <div class="left link-container" v-if="!$route.path.includes('join')">
                <router-link to="/teacher/join">Chcę założyć konto</router-link>
            </div>


            <div class="border"></div>

            <div class="right link-container" v-if="!$route.path.includes('login')">
                <router-link to="/teacher/login">Chcę się zalogować</router-link>
            </div>

            <router-view v-if="$route.path.includes('login')" class="login"></router-view>


        </section>
    </div>
</template>

<script>
    export default {
        name: "Teacher-Home"
    }
</script>

<style scoped lang="scss">

    @import '../../assets/css/variables.scss';

    .teacher-home-container {
        display: grid;
        height: 100vh;
        width: 100vw;

        section {
            margin: auto;
            width: 40%;
            height: 200px;
            display: grid;
            grid-template-columns: 1fr 1px 1fr;

            a {
                text-decoration: none;
                color: #828282;
            }

            .left {
                text-align: center;
                align-self: center;
            }

            .border {
                align-self: center;
                background-color: rgba(218, 218, 218, 0.75);
                height: 25%;
            }

            .right {
                text-align: center;
                align-self: center;
            }

            .link-container {
                margin: auto;
                max-height: 25%;
                width: 100%;
                line-height: 50px;
                transition: 300ms;
            }

            .link-container:hover {
                border-radius: 0;
                background-color: $mainBlue;
                cursor: pointer;
            }
            .link-container:hover > a {
                color: white;

            }

            .login {
                margin: auto auto;
                transform: translateX(40px);
            }

            .join {
                margin: auto auto;
                transform: translateX(-40px);
            }
        }
    }

    /* MOBILE */

    @media only screen and (max-width: 768px) {
        .teacher-home-container {
            section {
                width: 80%;
            }
        }
    }


</style>