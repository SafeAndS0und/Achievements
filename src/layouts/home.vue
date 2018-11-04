<template>
    <div>
        <div>
            <!-- Nasze dane będziemy wstrzykiwać za pomocą <slot>ów-->
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>

</style>