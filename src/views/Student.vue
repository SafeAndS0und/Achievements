<template>
    <div class="student-container">
        <transition name="fade">
            <p v-show="filtered.length > 0" class="resultsCounter">Wyników: {{filtered.length}}</p>
        </transition>

        <transition-group name="list" tag="div" class="students-list">
            <StudentInfo
                    v-for="student in filtered"
                    :key="student.username"
                    :student="student"
            ></StudentInfo>
        </transition-group>


    </div>
</template>

<script>
    import StudentInfo from '../components/StudentInfo.vue'

    export default {
        name: "Student",
        components: {StudentInfo},
        props: {
            searchValue: String
        },
        data(){
            return {
                students: [],
                st: []
            }
        },
        computed: {
            filtered(){
                let asd = this.api
                return this.st.filter(item =>{
                    return this.searchValue.length > 0
                        && item.username.toLowerCase().includes(this.searchValue.toLowerCase());
                });
            },

            api(){
                if(this.searchValue){
                    return this.axios.get('http://192.168.1.144:3000/students/' + this.searchValue +'/10')
                        .then(res => {
                            this.st = res.data.students
                            console.log('Search Value', this.searchValue)
                            console.log('api students', res.data.students)
                            console.log('local students', this.st)
                        })
                }
            }
        },
    }
</script>

<style scoped lang="scss">

    @import '../assets/css/variables.scss';

    .students-list {
        margin-top: 30px;
        margin-left: 20%;
        margin-right: 20%;
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(4, 1fr);
    }

    .resultsCounter {
        margin-left: 20%;
        margin-top: 50px;
        color: #534b4c;
    }


    /*ANIMACJA LISTY*/

    .list-enter-active, .list-leave-active {
        transition: all 600ms;
    }

    .list-enter {
        opacity: 0;
        transform: translateY(-20px);
    }

    .list-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }

    /*ANIMACJA LICZNIKA*/

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    /* MOBILE */

    @media only screen and (max-width: $mobile) {

        .students-list {
            margin-left: 5%;
            margin-right: 5%;
            grid-template-columns: 1fr;
        }
    }
</style>