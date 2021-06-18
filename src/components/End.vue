<template>
    <div class='text-center'>
        <div class='textbox clear'>
            You finished!
            Thank you for participating in the study, I really appreciate it.
            <br>
            Feel free to play as much as you want to unlock all the outcomes, but please <b>remember to set your age to 0</b> if you do.
            <br>
            <br>
            As a side note, the Bergen social media addiction scale was a part of the first quiz you performed.
            <br>
            You scored {{collected_data.bergenScore}}/30 points (the lower the better) and answered with "often" or "very often"
            <template v-if="collected_data.bergenAddiction">
                4 or more times, which according to research it is an addiction indicator.
            </template>
            <template v-else>
                3 or less times.
            </template>

        </div>

        <div class="fixed-bottom footer">
            
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'End',
        computed: {
            ...mapState(['collected_data'])
        },
        methods: {

        }
    }
</script>