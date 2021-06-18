<template>
    <div class='text-center'>
        <div class='textbox clear'>
            <h1> Quiz </h1>
            {{quizz_info[game.current_quizz].questions[game.current_quizz_question].question}}
        </div>
        <ul class="list-group fixed-bottom footer">
            <li 
            v-for="(item, index) of quizz_info[game.current_quizz].questions[game.current_quizz_question].answers" 
            :key="item.id" class="list-group-item list-group-item-action"
            @click="answerSelected(index)">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Quizz',
        computed: {
            ...mapState(['game', 'quizz_info'])
        },
        methods: {
            ...mapMutations(['answerSelected'])
        }
    }
</script>
