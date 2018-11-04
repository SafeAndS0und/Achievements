<template>
    <div>
        <div @click="$router.push('/')">
            <Icon name="arrow-left" scale="1.5" class="arrow"></Icon>
        </div>
        <div>
            <slot/>

        </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    export default {
        name: "teacher",
        components:{Icon}
    }
</script>

<style scoped>

    .arrow {
        position: fixed;
        left: 0;
        top: 0;
        padding: 25px 30px;
        color: #d7d7d7;
        transition: 300ms;
        opacity: 1;
        z-index: 5;
    }

    .arrow:hover {
        color: white;
        background-color: #1677f2;
        cursor: pointer;
    }

</style>