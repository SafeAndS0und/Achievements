<template>
    <router-link :to="`/student/${student.nick}`">
        <article>
            <h1>{{student.nick}}</h1>
        </article>
    </router-link>
</template>

<script>
    export default {
        name: "StudentInfo",
        props: {
            student: Object
        }
    }
</script>

<style scoped lang="scss">
    $lightBlue: #148fff;
    $mainBlue: rgb(23, 120, 227);
    $darkBlue: #2c63ff;

    article {
        width: 100%;
        text-align: center;
        height: 60px;
        line-height: 60px;
        background-color: $lightBlue;
        transition: 200ms;

        h1 {
            letter-spacing: 3px;
            font-size: 15px;
        }
    }

    article:hover {
        background-color: $darkBlue;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }


</style>