<template>
    <div>
        <section class="hero">
            <Icon name="edit" scale="2" class="edit" @click.native="$router.push(`/student/${student.username}/edit`)"/>

            <div class="header">
                <h1>{{student.username}}</h1>
                <h3>{{student.name}} {{student.surname}}</h3>
            </div>

            <p class="description">
                {{student.description}}
            </p>

            <div class="social-container">
                <Icon name="brands/facebook-f" @click.native="$router.push(`${student.facebook}`)" scale="2.6" class="social"/>
                <Icon name="brands/instagram" scale="2.6" class="social"/>
                <Icon name="brands/steam" scale="2.6" class="social"/>
            </div>

            <div class="info-container">
                <p class="info-item">{{student.phone}}</p>
                <p class="info-item">{{student.contactEmail}}</p>
            </div>

        </section>


        <h1 class="achievements-title">Przedmioty i osiągniecia</h1>
        <section class="achievements">
            <AchievementList :achivList="achievements" subject="Programowanie" teacher="Adam Fulara" class="list"/>
            <AchievementList :achivList="achievements" subject="Bazy Danych" teacher="Grzegorz Szałkowski"
                             class="list"/>
            <AchievementList :achivList="achievements" subject="Biologia" teacher="Piotr Stempin" class="list"/>
        </section>

    </div>
</template>

<script>
    import AchievementList from '../components/AchievementList.vue'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        name: "SingleStudent",
        components: {
            AchievementList,
            Icon
        },
        data(){
            return {
                achievements: [
                    {
                        name: 'Pętle w PHP',
                        description: 'Uczeń zna 3 podstawowe pętle FOR, WHILE, oraz DO WHILE. Potrafi zagnieżdżać 43 pętle w sobie.',
                        status: 0
                    },
                    {
                        name: 'Tablice Javascript',
                        mark: 5,
                        description: 'Uczeń potrafi tworzyć tablice, dodawać i usuwać z niej wartości. Potrafi też iterować po elementach tej tablicy.',
                        status: 3
                    },
                    {
                        name: 'Zadanie - PANEL ADMINA',
                        mark: 1,
                        description: 'Stworzenie w bazie danych tabeli samochody, oraz wypisanie jej za pomocą PHP.',
                        comment: 'DO POPRAWY! Ostateczny termin zdania: 18.11',
                        status: 1
                    },
                    {
                        name: 'Zadanie - PANEL ADMINA',
                        mark: 1,
                        description: 'Stworzenie w bazie danych tabeli samochody, oraz wypisanie jej za pomocą PHP.',
                        comment: 'DO POPRAWY! Ostateczny termin zdania: 18.11',
                        status: 1
                    }
                ],
                student: {}

            }
        },
        created(){
            this.axios.get('profiles/' + this.$route.params.id)
                .then(res => {
                    this.student = res.data[0].student
                    this.student.description = res.data[0].description
                    this.student.phone = res.data[0].phone
                    this.student.contactEmail = res.data[0].contactEmail
                    this.student.facebook = res.data[0].facebook
                })
                .catch(err => console.log(err.response))
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/variables.scss';

    .hero {
        margin-top: 120px;
        height: 320px;
        width: 100%;
        background-image: linear-gradient(to right, #0a5ab1, #0c62bf, #0e69ce, #1171dc, #1379eb);
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        position: relative;

        .edit{
            position: absolute;
            top: 0;
            right: 0;
            color: white;
            padding: 15px 15px 15px 20px;
            transition: 200ms;
            cursor: pointer;
        }
        .edit:hover{
            background-color: white;
            color: $mainBlue;
        }

        .header{
            grid-column: 5/9;
            grid-row: 1/3;
            margin-top: 5px;

            h1 {
                text-align: center;
                color: white;
                font-size: 48px;
            }

            h3{
                text-align: center;
                color: white;
                font-size: 22px;
            }
        }

        .description {
            grid-row: 1/3;
            grid-column: 1/5;
            padding: 100px 50px;
            color: white;
            font-size: 18px;

        }

        .social-container{
            grid-column: 5/9;
            grid-row: 2/3;
            margin: 0 auto;
            align-self: center;

            .social{
                display: inline-block;
                color: white;
                padding: 25px 45px;
                cursor: pointer;
                transition: 300ms;
            }
            .social:first-child:hover{
                background-color: white;
                color: $darkBlue;
            }
            .social:nth-child(2):hover{
                background-color: white;
                color: #ec3366;
            }
            .social:last-child:hover{
                background-color: white;
                color: #042e63;
            }
        }

        .info-container{
            grid-row: 1/2;
            grid-column: 10/12;
            align-self: end;

            .info-item{
                color: #ffffff;
                font-size: 16px;
                padding: 6px;
            }
        }

    }

    .achievements-title{
        text-align: center;
        font-size: 36px;
        font-weight: lighter;
        letter-spacing: 4px;
        margin-top: 150px;

    }

    .achievements {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        .list {
            padding: 10px 10px;
            grid-column: span 4;
            margin-bottom: 50px;
        }
    }


</style>