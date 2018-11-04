<template>
    <article>

        <h1 @click="toggleContent">{{achievementData.name}}
            <Icon :name="arrowName" scale="1.8" class="arrow"/>
        </h1>


        <transition name="fade">
            <div class="content" v-if="showContent">
                <p class="desc">{{achievementData.description}}</p>

                <div class="mark">
                    <span :style="{backgroundColor: currentColor}"
                          v-if="achievementData.mark">{{achievementData.mark}}</span>
                    <p v-else style="color: #535053">Do zaliczenia</p>
                </div>

                <div class="comment" v-if="achievementData.comment">
                    <p class="comment-content">
                        <b>Komentarz:</b> <br/>
                        {{achievementData.comment}}
                    </p>
                </div>
            </div>
        </transition>

    </article>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "Achievement",
        props: {
            achievementData: Object
        },
        components: {
            Icon
        },
        data(){
            return {
                colors: ['#2c2c2c', '#9C222D', '#E09A35', '#43ba21'],
                arrowName: 'angle-down',
                showContent: false
            }
        },
        computed: {
            currentColor(){
                return this.colors[this.achievementData.status]
            }
        },
        methods: {
            toggleContent(){
                this.showContent = !this.showContent
                if(this.showContent) this.arrowName = 'angle-up'
                else this.arrowName = 'angle-down'
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/css/variables.scss';

    $grey: #2f2f2f;
    $red: #9C222D;
    $yellow: #E09A35;
    $green: #43ba21;

    $d_grey: #1b1b1b;
    $d_red: #7a212c;
    $d_yellow: #c58133;
    $d_green: #5dba2f;

    article {
        width: 90%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        background-color: white;
        padding-bottom: 20px;

        h1 {
            text-align: center;
            font-weight: normal;
            font-size: 23px;
            grid-column: span 12;
            padding: 11px 0;
            margin-bottom: 10px;
            color: white;
            background-color: $d_grey;
            cursor: pointer;
            transition: 200ms;

            .arrow {
                padding-left: 15px;
                transform: translateY(7px);
                transition: 150ms;
            }
            .arrow:hover{
                color: $lightBlue;
            }
        }

        h1:hover{
            background-color: $grey;
        }
        .content {
            grid-column: 1/13;
            display: grid;
            grid-template-columns: repeat(12, 1fr);

            .desc {
                padding: 17px;
                grid-column: 1 / span 7;
                color: #151515;
                font-size: 17px;
            }

            .mark {
                margin-top: 15px;
                grid-column: 8/13;
                text-align: center;
                align-self: center;

                span {
                    padding: 20px 35px;
                    background-color: grey;
                    font-size: 35px;
                    color: white;
                    border-radius: 50%;
                }
            }

            .comment {
                margin-top: 15px;
                padding: 5px;
                grid-column: 8 / 13;

                .comment-content {
                    padding: 3px;
                    line-break: anywhere;
                    color: #434343;
                    font-size: 15px;
                }
            }
        }
    }


    /* TRANSITIONS */
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>