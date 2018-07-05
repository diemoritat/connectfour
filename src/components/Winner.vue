<template>
  <div class="winner">
    <p class="winner__label">And the winner is:</p>
    <h2 class="winner__name">{{this.$store.state.gameStatus.winner}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Winner'
}
</script>

<style lang="scss">
  .winner {
    &__name {
      text-transform: capitalize;
    }
  }
</style>
