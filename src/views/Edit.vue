<template>
    <div class="container">
        <InPut :height="15" v-model="description" class="search" placeholder="Opis profilu"/>
        <p>{{description}}</p>
        <InPut :height="15" @input="phone = $event" class="search" placeholder="Numer Telefonu"/>
        <p>{{phone}}</p>
        <InPut :height="15" @input="contactEmail = $event" class="search" placeholder="Email"/>
        <p>{{contactEmail}}</p>
        <InPut :height="15" @input="facebook = $event" class="search" placeholder="Link do profilu na facebooku"/>
        <p>{{facebook}}</p>
        <Btn class='save' :height="55" text="Zapisz zmiany" :width="24" @click.native="save"/>

    </div>
</template>

<script>
    import InPut from '../components/partials/InPut.vue'

    import Btn from '../components/partials/Button.vue'

    export default {
        name: "Edit",
        components: {
            InPut,
            Btn,

        },
        data(){
            return {
                description: this.$store.state.currentUser.description,
                phone: this.$store.state.currentUser.phone,
                contactEmail: this.$store.state.currentUser.contactEmail,
                facebook: this.$store.state.currentUser.facebook,
            }
        },
        methods: {
            save(){
                this.axios.patch('http://localhost:3000/profiles/' + this.$route.params.id, {
                    description: this.description,
                    phone: this.phone,
                    contactEmail: this.contactEmail,
                    facebook: this.facebook
                })
                    .then(res =>{
                        // Update the store
                        this.$store.dispatch('updateTheProfile', {
                            description: this.description,
                            contactEmail: this.contactEmail,
                            phone: this.phone,
                            facebook: this.facebook
                        })
                    })
                    .catch(err => console.log(err.response))
            }
        },
        created(){
            //dodatkowa walidacja
            if(!this.$store.state.currentUser.username) this.$router.push('/error')
        }
    }
</script>

<style scoped lang="scss">

    .container {
        margin-top: 220px;
        display: grid;
        width: 100%;

        .search {
            justify-self: center;
            width: 32%;
        }

        p {
            justify-self: center;
            width: 30%;
            color: #6f6f6f;
            font-size: 15px;
            padding: 6px 0 36px 0;
            word-break: break-all;
        }
        .save {
            justify-self: center;
            margin-top: 12px;
        }
    }

</style>