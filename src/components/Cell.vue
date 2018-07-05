<template>
  <div class="cell-holder" >
    <div v-if="this.data.status" :class="`cell${filledClass} ${this.data.color}`"></div>
  </div>
</template>

<script>
export default {
  name: 'Cell',
  props: {
    data: Object
  },
  computed: {
    filledClass() {
      return this.data.status ? `  cell--filled-${this.data.color}` : '';
    }
  }
}
</script>

<style lang="scss">
.cell-holder {
  width: 50px;
  height: 50px;
  margin: 5px;
  background-color: #fff;
  border-radius: 50%;
}

@mixin coinPos($yaxis: 0) {
  transform: translate3d(0, $yaxis, 0);
}

.cell {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: fallingCoin 0.8s linear both;
  @include coinPos(-400px);

  &--filled-red {
    background-color: red;
  }

  &--filled-black {
    background-color: #000;
  }
}

@keyframes fallingCoin {
  60%, 80%, 95%, 99%, 100% { @include coinPos() }
  70% { @include coinPos(-30px); }
  90% { @include coinPos(-15px); }
  97% { @include coinPos(-10px); }
}
</style>
