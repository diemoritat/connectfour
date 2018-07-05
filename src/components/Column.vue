<template>
  <div class="column">
    <div class="column__arrow" @click="addCoin">
      <i class="material-icons">arrow_downward</i>
    </div>
    
    <board-cell v-for="(cell, index) of rows" :key="`cell__${index}`" :data="cells[index]"/>
  </div>
</template>

<script>
import Cell from './Cell';

export default {
  name: "Column",
  components: {
    'board-cell': Cell
  },
  props: {
    rows: Object,
    id: Number
  },
  data() {
    return {
      cells: {
        5: {
          status: false,
          color: ''
        },
        4: {
          status: false,
          color: ''
        },
        3: {
          status: false,
          color: ''
        },
        2: {
          status: false,
          color: ''
        },
        1: {
          status: false,
          color: ''
        },
        0: {
          status: false,
          color: ''
        }
      },
      lastAdded: 5
    }
  },
  computed: {
    isFull() {
      return this.cells[0].status;
    }
  },
  methods: {
    addCoin() {
      if (this.isFull){
        this.$emit('fullColumn', {row: this.lastAdded--, column: this.id});
        return false;
      }
      this.cells[this.lastAdded].status = true;
      this.cells[this.lastAdded].color = this.$store.state.gameStatus.turn;
      this.$emit('updateColumn', {row: this.lastAdded--, column: this.id});
    }
  }
}
</script>

<style lang="scss">
.column {
  display: inline-flex;
  flex-direction: column;
  padding: 10px;
  background-color: #ececec;

  &__arrow {
    cursor: pointer;
  }
}
</style>