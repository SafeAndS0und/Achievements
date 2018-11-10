<template>
    <div>
        <section class="hero">

            <h1>{{$route.params.id}}</h1>

            <div class="social-container">
                <Icon name="brands/facebook-f" scale="2.6" class="social"/>
                <Icon name="brands/instagram" scale="2.6" class="social"/>
                <Icon name="brands/steam" scale="2.6" class="social"/>
            </div>

            <p class="description">
                Hej, Jestem paweł i zdaje rozszerzony polski, czego bardzo żałuję.
                Pani na matmie myśli, że mam 30IQ.
                Interesuję się ...
            </p>



            <div class="info-container">
                <p class="info-item">pawel.czaszka@gmail.com</p>
                <p class="info-item">576521953</p>
                <p class="info-item">Ostrzeszów</p>
            </div>

        </section>

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
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/variables.scss';

    .hero {
        margin-top: 140px;
        height: 280px;
        width: 100%;
        background-image: linear-gradient(to right, #0a5ab1, #0c62bf, #0e69ce, #1171dc, #1379eb);
        display: grid;
        grid-template-columns: repeat(12, 1fr);

        h1 {
            grid-column: span 12;
            text-align: center;
            color: white;
            font-size: 48px;
            height: 40px;
        }

        .social-container{
            grid-column: 1/5;
            margin: 0 auto;

            .social{
                display: inline-block;
                color: white;
                padding: 25px 45px;
                cursor: pointer;
                transition: 300ms;
            }
            .social:first-child:hover{
                background-color: white;
                color: $mainBlue;
            }
            .social:nth-child(2):hover{
                background-color: white;
                color: #ec3366;
            }
            .social:last-child:hover{
                background-color: white;
                color: #042952;
            }
        }

        .description {
            grid-column: 5/9;
            padding: 15px 30px;
            color: white;
            font-size: 18px;

        }


        .info-container{

            grid-column: 10/13;

            .info-item{
                color: #ffffff;
                font-size: 16px;
                padding: 6px;
            }
        }

    }

    .achievements {
        margin-top: 110px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        .list {
            padding: 10px 10px;
            grid-column: span 4;
            margin-bottom: 50px;
        }
    }


</style>