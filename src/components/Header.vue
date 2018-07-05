<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__title">Connect Four</h1>
      <p class="header__instructions">{{ instructions }}</p>

      <div class="header__players">
        <div class="header__player-turn">
          Current player: <span :class="`header__player-turn--${$store.state.gameStatus.turn}`">{{$store.state.gameStatus.turn}}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      instructions: 'Click columns to add coins. The first player to get four coins in a row, either vertical, horizontal, or diagonal, wins.'
    }
  }
}
</script>

<style lang="scss">
  .header {
    background-color: papayawhip;
    width: 100vw;
    padding: 20px 0;

    &__content {
      max-width: 960px;
      margin: 0 auto;
    }

    &__players {
      display: inline-block;
      margin: 0 auto;
      background: #fff;
      padding: 10px;
    }

    &__player-turn {
      text-transform:capitalize;
      
      &--black {
        color: black
      }
      &--red {
        color: red
      }
    }
  }
</style>
