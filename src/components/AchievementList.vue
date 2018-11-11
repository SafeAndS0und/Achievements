<template>
    <section>

        <div class="header">
            <h1>
                {{subject}}
            </h1>
            <p class="teacher">{{teacher}}</p>
            <Icon :name="arrowName" scale="1.8" class="arrow" @click.native="toggleContent"/>
        </div>

        <div v-for="achiv of achivList" v-if="showList">
            <Achievement :achievement-data="achiv" class="achivement"/>
        </div>

    </section>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import Achievement from '../components/partials/Achievement.vue'

    export default {
        name: "AchievementList",
        components: {
            Achievement,
            Icon
        },
        props: {
            achivList: Array,
            subject: String,
            teacher: String
        },
        data(){
            return {
                showList: false,
                arrowName: 'angle-down',
            }
        },
        methods: {
            toggleContent(){
                this.showList = !this.showList
                if(this.showList) this.arrowName = 'angle-up'
                else this.arrowName = 'angle-down'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/variables.scss';

    section {
        .header {
            width: 100%;

            h1 {
                font-weight: normal;
                text-align: center;
                box-sizing: border-box;
                width: 100%;
                color: black;
                margin-bottom: 10px;
                font-size: 28px;
            }

            .arrow {
                cursor: pointer;
                display: block;
                margin: 10px auto 20px auto;
                padding: 10px 20px;
                transition: 200ms;
                color: $mainBlue;
                border-radius: 3px;
                background-color: transparent;
            }
            .arrow:hover {
                padding: 10px 30px;
                background-color: $mainBlue;
                color:white;
                border-radius: 7px;

            }

            .teacher {
                font-size: 15px;
                color: #727272;
                text-align: center;
            }
        }
        div {
            display: grid;

            .achivement {
                justify-self: center;
            }
        }

    }

</style>