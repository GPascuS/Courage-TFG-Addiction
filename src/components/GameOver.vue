<template>
    <div class='text-center'>
        <div class='textbox clear'>
            <h1>You finished the game!</h1>
            Unfortunately, you lost all your mood at one point, so you technically lost the game.
        </div>
        <div class="fixed-bottom footer">
            <button 
            type="button" 
            class="btn btn-primary btn-lg" 
            @click="changeAppState(appStates.quizz);">
                <h1>Start Quizz</h1>
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'GameOver',
        computed: {
            ...mapState(['appStates'])
        },
        methods: {
            ...mapMutations(['changeAppState'])
        }
    }
</script>
