<template>
    <div>
        <input :type="type" :autofocus="autofocus" @focus="$emit('focused')" @input="emit" v-model="val"
               :placeholder="placeholder" :style="{height: height + 'px'}">
    </div>
</template>

<script>
    export default {
        name: "InPut",
        data(){
            return {
                val: ''
            }
        },
        props: {
            placeholder: {
                type: String,
                default: ''
            },
            width: {
                type: Number,
                default: 100
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            height: {
                type: Number,
                default: 28
            }
        },
        methods: {
            emit(event){
                this.$emit('input', this.val)
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../../assets/css/variables.scss';

    input {
        border: none;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5px;
        height: 28px;
        width: 90%;
        padding: 12px;
        background-color: rgb(242, 236, 247);
        color: #636c6d;
        font-size: 17px;
        transition: 150ms;
    }

    input::placeholder {
        color: #a4a6a7;
        font-size: 17px;
    }

    input:focus {
        outline: none;
        background-color: $lightBlue;
        color: white;
    }

    input:focus::placeholder {
        font-size: 0;
    }

    @media only screen and (max-width: $mobile) {

        input::placeholder {
            font-size: 15px;
        }

    }
</style>