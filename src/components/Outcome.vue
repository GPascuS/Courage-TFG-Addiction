<template>
    <div class='text-center'>
        <h1><b>Day {{game.current_day + 1}}, Event {{game.current_situation + 1}}</b></h1>
        <hr />
        <div class="progress">
            <div :class="`${game.barclass}`" role="progressbar" :style="`${game.barstyle}`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Mood: {{game.player.mood}}</div>
        </div>
        <br>
        <div class='textbox clear'>
            <h1>Outcome</h1>
            {{day_info[game.current_day].situations[game.current_situation].options[collected_data.options_chosen[collected_data.options_chosen.length - 1]].outcome}}
            <div v-if:="game.current_situation == 1">
                <br><br>
                {{day_info[game.current_day].summary}}
            </div>
        </div>
        <br>

        <div class="fixed-bottom footer">
            <button 
            type="button" 
            class="btn btn-primary btn-lg" 
            @click="endOutcome()">
                <h1>Continue</h1>
            </button>
        </div>

    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Outcome',
        computed: {
            ...mapState(['appStates', 'day_info', 'game', 'collected_data'])
        },
        methods: {
            ...mapMutations(['endOutcome'])
        }
    }
</script>