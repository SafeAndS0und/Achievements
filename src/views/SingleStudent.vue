<template>
    <div>
        <AchievementList :achivList="achievements" subject="Programowanie" teacher="Adam Fulara" class="list" />
        <AchievementList :achivList="achievements" subject="Bazy Danych" teacher="Grzegorz Szałkowski" class="list" />
        <AchievementList :achivList="achievements" subject="Biologia" teacher="Piotr Stempin" class="list" />

    </div>
</template>

<script>
    import AchievementList from '../components/AchievementList.vue'

    export default {
        name: "SingleStudent",
        components: {
            AchievementList
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

    div{
        margin-top: 110px;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .list{
        padding: 10px 20px;
        grid-column: span 4;
        margin-bottom: 50px;
    }
</style>