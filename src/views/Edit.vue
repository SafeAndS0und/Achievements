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

        <transition name="fade">
            <p class="saved" v-if="saved">Zapisano zmiany</p>
        </transition>
        <Btn class='save' :height="45" text="Zapisz zmiany" :width="80" @click.native="save"/>

        <Btn class='remove' :height="45" @click.native="remove" text="Usuń profil" bg-color="#9C100C" :width="80"/>


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
            //TODO: After refresh it does not update, even though the store is updated... Computed are also making problems
            return {
                saved: false,
                description: this.$store.state.currentUser.description,
                phone: this.$store.state.currentUser.phone,
                contactEmail: this.$store.state.currentUser.contactEmail,
                facebook: this.$store.state.currentUser.facebook

            }
        },
        computed: {
            // description(){
            //     return this.$store.state.currentUser.description
            // },
            // phone(){
            //     return this.$store.state.currentUser.phone
            // },
            // contactEmail(){
            //     return this.$store.state.currentUser.contactEmail
            // },
            // facebook(){
            //     return this.$store.state.currentUser.facebook
            // }
        },
        methods: {
            save(){
                // Request with token in header
                this.axios({
                    url: 'profiles/' + this.$route.params.id,
                    method: 'patch',
                    // headers: {"Authorization": this.$store.state.currentUser.token},
                    data: {
                        description: this.description,
                        phone: this.phone,
                        contactEmail: this.contactEmail,
                        facebook: this.facebook
                    }
                })
                    .then(res =>{
                        // Update the store
                        this.$store.dispatch('updateTheProfile', {
                            description: this.description,
                            contactEmail: this.contactEmail,
                            phone: this.phone,
                            facebook: this.facebook
                        })
                            .then(() => this.saved = true)

                    })
                    .catch(err => console.log(err.response))
            },

            remove(){
                this.axios.delete('students/' + this.$store.state.currentUser.username)
                    .then(() =>{
                        this.$router.push('/')
                    })
                    .catch(err => console.log(err))
            }
        },
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/variables.scss';

    .container {
        margin-top: 180px;
        display: grid;
        width: 100%;
        position: relative;

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
            margin-top: 22px;

        }

        .saved {
            color: green;
            text-align: center;
            font-size: 20px;
            padding: 8px;
        }

        .remove {
            justify-self: center;
            margin-bottom: 40px;
        }
    }

    @media (max-width: $mobile) {
        .container {
            .search {
                justify-self: center;
                width: 90%;
            }

            p {
                width: 85%;
            }

            .save {
                width: 80%;
            }
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>