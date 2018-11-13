<template>
    <div>
        <section>
            <Icon name="exclamation-triangle"
                  scale="6"
                  class="icon"
            />
            <h1>Ups... Albo nie powinno Cię tu być, albo nic tu jeszcze nie ma</h1>
            <router-link to="/">Wracajmy do domu</router-link>
        </section>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "Error",
        components: {Icon}
    }
</script>

<style scoped lang="scss">

    div {
        width: 100%;
        height: 100vh;
        display: grid;

        section {
            justify-self: center;
            width: 100%;
            align-self: center;

            h1 {
                color: #941510;
                font-weight: lighter;
                font-size: 40px;
                text-align: center;
                padding: 40px 10px;
            }

            .icon {
                display: block;
                text-align: center;
                margin: 0 auto;
                transition: 300ms;
                animation: danger 600ms infinite alternate ease-out;
            }

            a {
                display: block;
                text-decoration: none;
                text-align: center;
                color: #691c19;
                transition: 200ms;
                font-size: 18px;

                &:hover{
                    color: #1963d2;
                }
            }

        }
    }
    
    @keyframes danger {

        from{
            color: #360712
        }
        to{
            color: #af2222
        }
        
    }

</style>