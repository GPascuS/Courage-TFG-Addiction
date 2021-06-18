<template>
    <div class='text-center'>
        <div class='textbox clear'>
            <h1>Tutorial</h1>
            In this mini-game, you will be presented with common situations in the daily life of a teenager student. 
            <br>
            Depending on the actions you choose, your mood will go up and down, and also certain future actions may be restricted if the outcome affects other characters. 
            <br>
            Since you will be the one controling the actions of the teenager, your course of action must match what you would do in his/her situation. 
            <br>
            <br><br>
            <b>
                DISCLAIMER
                <br>
                This game is fictional.
                <br>
                The story, characters and names presented are not real.
                <br>
                No identification with actual persons, places or events is intended or should be inferred.
                <br>
            </b>
        </div>

        <div class="fixed-bottom footer">
            <button 
            type="button" 
            class="btn btn-primary btn-lg" 
            @click="changeAppState(appStates.situation)">
                <h1>Continue</h1>
            </button>
        </div>

    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Tutorial',
        computed: {
            ...mapState(['appStates'])
        },
        methods: {
            ...mapMutations(['changeAppState']),
            changeAge() {
                this.player_age = document.getElementById('age').value;
            }
        }
    }
</script>