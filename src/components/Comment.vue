<template>
    <div class='text-center'>
        <div class='textbox clear'>
            <h1> Quiz </h1>
            Please type any extra comments you want to make.
        </div>
        <div class="fixed-bottom footer">
            <textarea class="form-control" id="commentBox" rows="5"></textarea>
            <br>
            <button 
            type="button" 
            class="btn btn-primary btn-lg" 
            @click="changeText(); collected_data.observations=comments; endComment();">
                <h1>Continue</h1>
            </button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Comment',
        data: function() {
            return {
                comments: ''
            }
        },
        computed: {
            ...mapState(['appStates', 'collected_data'])
        },
        methods: {
            ...mapMutations(['endComment']),
            changeText() {
                this.comments = document.getElementById('commentBox').value;
            }
        }
    }
</script>