<template>
    <div class="login-container">
        <div class="form-container">

            <h1>Załóż konto i trzymaj swoje szkolne osiągniecia w jednym miejscu</h1>

            <section>
                <h3>Nick - będzie służył do zalogowania, oraz do wyszukiwania Cię na stronie</h3>
                <InPut :width="80" :height="14" @input="student.username = $event"/>
            </section>

            <section>
                <h3>Email - będzie potrzebny w awaryjnych sytuacjach, jak zapomnienie hasła</h3>
                <InPut :width="80" :height="14" @input="student.email = $event"/>
            </section>

            <section>
                <h3>Hasło</h3>
                <InPut :width="80" :height="14" type="password" @input="student.password = $event"/>
            </section>


            <section>
                <h3>Imie (opcjonalne)</h3>
                <InPut :width="80" :height="14" @input="student.name = $event"/>
            </section>

            <section>
                <h3>Nazwisko (opcjonalne)</h3>
                <InPut :width="80" :height="14" @input="student.surname = $event"/>
            </section>


            <section>
                <h3>Wolę aby mój profil był:</h3>

                <div class="choice" :class="{private: priv}" @click="changeChoice('priv')">PRYWATNY</div>
                <div class="choice" :class="{public: pub}" @click="changeChoice('pub')">PUBLICZNY</div>
            </section>

            <section>
                <p>Wszystkie dane, oprócz nicku, możesz zedytować później w ustawieniach swojego profilu :) </p>
                <transition name="fade">
                    <p class="error" v-html="errorMsg" v-if="errorMsg"></p>
                </transition>
                <Button text="Dołącz" :width="100" :height="45" :font-size="22" style="margin-top: 20px"
                        @click.native="register"/>
            </section>
        </div>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import InPut from '../components/partials/InPut.vue'
    import Button from '../components/partials/Button.vue'

    export default {
        name: "Join",
        components: {Icon, InPut, Button},
        data(){
            return {
                priv: false,
                pub: false,
                student: {
                    username: '',
                    email: '',
                    name: '',
                    surname: '',
                    password: '',
                    public: true
                },
                errorMsg: ''
            }
        },
        methods: {
            changeChoice(choice){
                if(choice === "priv"){
                    this.priv = true
                    this.pub = false
                } else{
                    this.priv = false
                    this.pub = true
                }
            },
            register(){
                this.errorMsg = ''
                return this.axios.post('students/register', {
                    username: this.student.username,
                    email: this.student.email,
                    password: this.student.password,
                    name: this.student.name,
                    surname: this.student.surname,
                    public: this.student.public
                })
                    .then(res =>{
                        this.$router.push(`/student/${this.student.username}`)
                    })
                    .catch(err =>{
                        err.response.data.validationErrors.forEach((err, index) => this.errorMsg += index + 1 + '. ' + err + '<br/>')
                    })

            }
        }
    }
</script>

<style scoped lang="scss">

    @import '../assets/css/variables.scss';

    .form-container {
        width: 100%;
        display: grid;
        margin-top: 150px;
        grid-template-columns: repeat(12, 1fr);

        h1 {
            color: $darkBlue;
            font-weight: lighter;
            grid-column: 3/11;
            font-size: 34px;
            text-align: center;
            margin-bottom: 50px;
        }

        section {
            margin: 15px 0;
            grid-column: 4/10;
            padding-bottom: 20px;
            border-bottom: 1px solid #ebebeb;
            text-align: center;
            h3 {
                font-weight: lighter;
                font-size: 17px;
                text-align: center;
                margin-bottom: 15px;
            }

            .choice {
                text-align: center;
                width: 20%;
                padding: 18px;
                display: inline-block;
                color: white;
                letter-spacing: 3px;
                font-weight: bold;
                font-size: 20px;
                margin: 18px auto;
                background-color: rgb(137, 147, 154);
                transition: 100ms;
            }

            .choice:nth-child(2) {
                border-bottom-left-radius: 40px;
                border-top-left-radius: 40px;
            }
            .choice:last-child {
                border-bottom-right-radius: 40px;
                border-top-right-radius: 40px;
            }
            .choice:hover {
                background-color: #c6cbcc;
                cursor: pointer;
            }

            .private, .private:hover {
                background-color: #cc2b21;
            }
            .public, .public:hover {
                background-color: #6acc42;
            }

        }

        section:last-child {
            border: none;
        }
    }

    /* MOBILE */

    @media only screen and (max-width: $mobile) {
        .form-container {
            h1 {
                grid-column: 1/13;
            }
            section {
                grid-column: 2/12;

                .choice {
                    width: 90%;
                }

                .choice:nth-child(2) {
                    border-bottom-left-radius: 0;
                    border-top-left-radius: 0;
                }
                .choice:last-child {
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                }

                .join-button {
                    margin-top: 50px;
                }
            }
        }

        .arrow {
            padding: 15px;
            opacity: 0.8;
        }

    }

    .error {
        margin-top: 8px;
        text-align: center;
        font-size: 15px;
        color: #810702;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

</style>