<template>
    <div class='text-center'>
        <div class='textbox clear'>
            <h1>You won the game!</h1>
        </div>
        <div class="fixed-bottom footer">
            <button 
            type="button" 
            class="btn btn-primary btn-lg" 
            @click="changeAppState(appStates.quizz)">
                <h1>Start Quizz</h1>
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Win',
        computed: {
            ...mapState(['appStates'])
        },
        methods: {
            ...mapMutations(['changeAppState'])
        }
    }
</script>