<template>
  <div id="app" class="container">
    <MainMenu v-if="game.appState == appStates.menu"></MainMenu>
    <Tutorial v-if="game.appState == appStates.tutorial"></Tutorial>
    <Situation v-if="game.appState == appStates.situation"></Situation>
    <GameOver v-if="game.appState == appStates.gameover"></GameOver>
    <Win v-if="game.appState == appStates.win"></Win>
    <Quizz v-if="game.appState == appStates.quizz"></Quizz>
    <End v-if="game.appState == appStates.end"></End>
    <Outcome v-if="game.appState == appStates.outcome"></Outcome>
    <Comment v-if="game.appState == appStates.comment"></Comment>
    <!-- <HelloWorld msg=""/> -->

  </div>
</template>

<script>
import {mapState} from 'vuex'
//import HelloWorld from './components/HelloWorld.vue'
import MainMenu from './components/MainMenu.vue'
import Situation from './components/Situation.vue'
import GameOver from './components/GameOver.vue'
import Win from './components/Win.vue'
import Quizz from './components/Quizz.vue'
import Tutorial from './components/Tutorial.vue'
import End from './components/End.vue'
import Outcome from './components/Outcome.vue'
import Comment from './components/Comment.vue'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    MainMenu,
    Situation,
    GameOver,
    Win,
    Quizz,
    Tutorial,
    End,
    Outcome,
    Comment
  },
  computed: {
    ...mapState(['appStates', 'game'])
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
  }

  .textbox {
      display: block;
      padding: 5px;
      border: 4px solid #000000;
      border-radius: 5px;
      background-color:rgb(211, 211, 211);
      color: #333;
  }

  .container {
    /* font-size: 0.90em; */
    /* font-size: 1.85vh; */
    font-size: 1.95vh;
  }

  .footer {
    position: fixed;
    margin: auto;
    width: 90%;

    bottom: 2rem;
    /*left: 0.75em;
    right: 0.75em;*/
  }

  .bg-image {
    background: url("./assets/teen_mobile_op.png") no-repeat center fixed;
    background-size: contain;
  }

  .list-group-item-action {
    cursor: pointer;
  }

</style>
