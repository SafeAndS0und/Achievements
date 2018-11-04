<template>
    <section>

        <div class="header">
            <h1 @click="toggleContent">
                {{subject}}
                <Icon :name="arrowName" scale="1.8" class="arrow"/>
            </h1>
            <p class="teacher">{{teacher}}</p>
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

    section {
        display: grid;
        grid-gap: 15px;
        grid-template-rows: minmax(45px, 140px);

        .header {
            width: 100%;

            h1 {
                font-weight: normal;
                text-align: center;
                box-sizing: border-box;
                cursor: pointer;
                transform: translateX(20px);

                .arrow {
                    transform: translateY(16px);
                    padding: 12px 20px;
                    transition: 200ms;
                }
                .arrow:hover {
                    background-color: #148fff;
                    color: white;
                }
            }

            .teacher {
                font-size: 15px;
                color: #727272;
                text-align: center;
                margin-bottom: 25px;
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