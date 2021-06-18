<template>
    <div class='container'>
        <h1><b>Day {{game.current_day + 1}}, Event {{game.current_situation + 1}}</b></h1>
        <hr />
        <div class="progress">
            <div :class="`${game.barclass}`" role="progressbar" :style="`${game.barstyle}`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Mood: {{game.player.mood}}</div>
        </div>
        <br>
        <!-- <div style='position: absolute; bottom: 0px;'> -->
        <div class='textbox clear'>
            {{day_info[game.current_day].situations[game.current_situation].explanation}}
        </div>
        <ul class="list-group fixed-bottom footer">
            <li 
            v-for="(item, index) of day_info[game.current_day].situations[game.current_situation].options" 
            :key="item.id" class="list-group-item list-group-item-action"
            @click="optionSelected(index)">
                <del v-if="
                (game.current_day == 0 && game.current_situation == 1 && index == 2 && collected_data.options_chosen[collected_data.options_chosen.length - 1] == 0) ||
                (game.current_day == 1 && game.current_situation == 1 && index == 0 && collected_data.options_chosen[collected_data.options_chosen.length - 1] == 2) ||
                (game.current_day == 2 && game.current_situation == 1 && index == 2 && collected_data.options_chosen[collected_data.options_chosen.length - 1] == 0)
                ">
                    {{item.text}}
                </del>
                <div v-else>
                    {{item.text}}
                </div>
            </li>
        </ul>
        <!--current_day: {{game.current_day}} <br>
        current_situation: {{game.current_situation}}-->

        <!-- </div> -->
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Situation',
        computed: {
            ...mapState(['game', 'day_info', 'collected_data'])
        },
        methods: {
            ...mapMutations(['optionSelected'])
        }
    }
</script>
