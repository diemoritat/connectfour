<template>
  <div class="page">
    <page-header/>
    <div class="page__content">
      <transition name="fade" mode="out-in">
        <game-board v-if="this.$store.state.gameStatus.winner === ''" />
        <winner v-else />
      </transition>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Winner from './components/Winner';

export default {
  name: "App",
  components: {
    'game-board': GameBoard,
    'page-header': Header,
    'winner': Winner
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
