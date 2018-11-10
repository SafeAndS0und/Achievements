<template>
    <article>

        <h1 @click="toggleContent">{{achievementData.name}}
            <Icon :name="arrowName" scale="1.8" class="arrow"/>
        </h1>


        <transition name="fade">
            <div class="content" v-if="showContent">
                <p class="desc">{{achievementData.description}}</p>

                <div class="mark" :style="{backgroundColor: currentColor}">
                    <span v-if="achievementData.mark">{{achievementData.mark}}</span>
                    <p v-else>Do zaliczenia</p>
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
                colors: ['#e8e8e8', '#9C222D', '#E09A35', '#43ba21'],
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

    $grey: #f2f2f2;
    $red: #9C222D;
    $yellow: #E09A35;
    $green: #43ba21;

    $d_grey: #1b1b1b;
    $d_red: #7a212c;
    $d_yellow: #c58133;
    $d_green: #5dba2f;

    article {
        width: 85%;
        box-sizing: border-box;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin-bottom: 15px;

        h1 {
            text-align: center;
            font-weight: lighter;
            font-size: 21px;
            grid-column: span 12;
            color: #303030;

            cursor: pointer;
            transition: 200ms;
            padding: 12px 0;
            max-height: 30px;


            .arrow {
                padding-left: 15px;
                transform: translateY(7px);
            }
        }

        h1:hover{
            background-color: $mainBlue;
            color: white;
        }
        .content {
            margin-top: 15px;
            grid-column: 1/13;
            display: grid;
            grid-template-columns: repeat(12, 1fr);


            .desc {
                padding: 30px 15px;
                grid-column: 1 / span 7;
                color: #3d3d3d;
                font-size: 16px;

            }

            .mark {
                grid-column: 8/13;
                height: 100%;
                color: white;
                display: grid;

                span{
                    align-self: center;
                    justify-self: center;
                    font-size: 35px;
                    color: white;
                }
                p{
                    align-self: center;
                    justify-self: center;
                    font-size: 15px;
                    color: #3c3c3c;
                }
            }

            .comment {
                padding: 15px;
                grid-column: 1 / 13;

                .comment-content {
                    line-break: anywhere;
                    color: #606060;
                    font-size: 14px;
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