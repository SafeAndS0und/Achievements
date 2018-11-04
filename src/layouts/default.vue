<template>
    <div>


        <nav>

            <div @click="$router.go(-1)">
                <Icon name="arrow-left" scale="1.8" class="arrow"></Icon>
            </div>

            <section class="navbar">
                <router-link to="/student" class="navbar-link">Strona Główna</router-link>
                <router-link to="/preferences" class="navbar-link">Preferencje</router-link>
                <router-link to="/teacher" class="navbar-link">Nauczyciel</router-link>
            </section>
        </nav>


        <div>
            <slot/>
        </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "default",
        components: {Icon},
    }
</script>

<style scoped lang="scss">


    @import '../assets/css/variables.scss';

    nav {
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        .arrow {
            position: fixed;
            left: 0;
            top: 0;
            padding: 25px 30px;
            color: white;
            background-color: #1f9df4;
            transition: 100ms;
            opacity: 1;
            z-index: 5;
        }

        .arrow:hover {
            background-color: $lightBlue;
            cursor: pointer;
        }

        .navbar {
            position: fixed;
            top: 0;
            right: 0;
            height: 79px;
            width: 100%;
            z-index: 4;
            background-color: #ffffff;
            border-bottom: 1px solid #f4f4f4;
            display: grid;
            grid-template-columns: repeat(12, 1fr);

            .navbar-link {
                color: $mainBlue;
                display: inline-block;
                padding: 0 20px;
                height: 79px;
                line-height: 79px;
                text-decoration: none;
                grid-column: 4/13;
                transition: 250ms;
                font-size: 16px;
            }
            .navbar-link:hover {
                background-color: $mainBlue;
                color: white;
            }
            .navbar-link:nth-child(1) {
                grid-column: 9/11;
                position: absolute;
                right: 0;
            }
            .navbar-link:nth-child(2) {
                grid-column: 11/12;
            }
            .navbar-link:nth-child(3) {
                grid-column: 12/13;
            }
        }

    }


</style>