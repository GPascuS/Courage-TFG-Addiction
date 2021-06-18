<template>
    <div class='text-center'>
        <div class='textbox clear'>
            Hello! This mini-game is part of a study regarding social media addiction on teenagers.<br>
            To continue, enter your age and click the button.<br><br>
            Once you click 'Start Game' you will have to: <br>
            - Answer a quiz related to social media addiction. <br>
            - Play the game. <br>
            - Repeat the quiz. <br><br>
            <b>
                DISCLAIMER
                <br>
                Your age will only be used to perform an statistical analysis.
                This, along with your answers, is the only information being gathered, so there is no possible way to relate your answers to you as an individual.
                <br>
                Also, there is no information being extracted from your device.
                <br>
                If you start the game, you are consenting to this use of your age and answers.
                <br>
            </b>
        </div>

        <div class="fixed-bottom footer">
            <h1>Your age:</h1><input type="number" maxlength="3" id="age" name="age" placeholder="Age" :value="`${game.player.age}`">
            <br><br>
            <button 
            type="button" 
            class="btn btn-primary btn-lg" 
            @click="changeAppState(appStates.quizz); changeAge(); game.player.age=player_age">
                <h1>Start Game</h1>
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'MainMenu',
        data: function() {
            return {
                player_age: 0
            }
        },
        computed: {
            ...mapState(['appStates', 'game'])
        },
        methods: {
            ...mapMutations(['changeAppState']),
            changeAge() {
                this.player_age = document.getElementById('age').value;
            }
        }
    }
</script>