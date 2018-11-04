<template>
    <div class="join-button"
         :style="{width: width + '%', height: height + 'px', lineHeight: height + 'px',
          backgroundColor: bgColor, fontSize: fontSize + 'px'}">
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "Button",
        props:{
            text: String,
            width: Number,
            height: Number,
            bgColor: {
                type: String,
                default: 'rgb(23, 120, 227)'
            },
            fontSize:{
                type: Number,
                default: 25
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../assets/css/variables.scss';

    .join-button {
        margin: 0 0;
        color: white;
        transition: 200ms;
        text-align: center;
        font-weight: bold;
        letter-spacing: 4px;
        text-transform: uppercase;
        background-color: rgb(23, 120, 227);
    }
    .join-button:hover {
        background-color: #006dcb;
        cursor: pointer;
    }
</style>