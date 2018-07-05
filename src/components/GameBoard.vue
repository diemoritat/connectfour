<template>
  <div class="board">
    <board-column v-for="column of columns" 
      :key="`column__${column.id}`" 
      :id="column.id"
      :rows="columns[column.id].coins"
      @updateColumn="updateStatus"
    />
  </div>
</template>

<script>
import Column from './Column';

export default {
  name: 'GameBoard',
  components: {
    'board-column': Column
  },
  data() {
    return {
      columns: {
         0: {
          id: 0,
          coins: {
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
          }
        },
        1: {
          id: 1,
          coins: {
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
          }
        },
        2: {
          id: 2,
          coins: {
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
          }
        },
        3: {
          id: 3,
          coins: {
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
          }
        },
        4: {
          id: 4,
          coins: {
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
          }
        },
        5: {
          id: 5,
          coins: {
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
          }
        },
        6: {
          id: 6,
          coins: {
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
          }
        }
      },
      rows: 6
    }
  },
  methods: {
    updateStatus(coords) {
      this.updateColumn(coords);
      if(!this.checkWinner(coords)) {
        this.toggleTurn();  
        return false;
      }

      setTimeout(() => {
        this.$store.state.gameStatus.winner = this.$store.state.gameStatus.turn;
      }, 800);
      
    },
    updateColumn(coords) {
      // Updating the columns 
      this.columns[coords.column].coins[coords.row].status = true;
      this.columns[coords.column].coins[coords.row].color = this.$store.state.gameStatus.turn;
    },
    checkWinner(coords) {
      // Checking the winner, both horizontally and vertically
      return this.checkHorizontalSegments(coords) || this.checkVerticalSegments(coords) || this.checkDiagonalSegments(coords);
    },
    checkBackwardHorizontalSegments(coords) {
      let firstMatch = '';
      // Find the first coin
      if(this.isPreviousHorizontalEqual(coords.column, coords.row)) {
        firstMatch = {column: coords.column-1, row: coords.row};
        
        if (this.isPreviousHorizontalEqual(coords.column-1, coords.row)){
          firstMatch = {column: coords.column-2, row: coords.row};

          if (this.isPreviousHorizontalEqual(coords.column-2, coords.row)){
            firstMatch = {column: coords.column-3, row: coords.row};
          }
        }
      }
      return firstMatch === '' ? coords : firstMatch;
    },
    checkHorizontalSegments(coords) {
      const newCoords = this.checkBackwardHorizontalSegments(coords);

      // Then check the next ones
      if(this.isNextHorizontalEqual(newCoords.column, newCoords.row)) {
        if (this.isNextHorizontalEqual(newCoords.column+1, newCoords.row)){
          if (this.isNextHorizontalEqual(newCoords.column+2, newCoords.row)){
            return true;
          }
        }
      }
      return false;
    },
    checkVerticalSegments(coords) {
      if(this.isNextVerticalEqual(coords.column, coords.row)) {
        if (this.isNextVerticalEqual(coords.column, coords.row+1)){
          if (this.isNextVerticalEqual(coords.column, coords.row+2)){
            return true;
          }
        }
      }
      return false;
    },
    checkDiagonalSegments(coords) {
      //Check towards bottom right
      if (this.isBottomRightEqual(coords.column, coords.row)) {
        console.log(true);
        if (this.isBottomRightEqual(coords.column+1, coords.row+1)) {
          console.log(true);
          if (this.isBottomRightEqual(coords.column+2, coords.row+2)) {
              return true;
          }
        }
      }

      //Check towards bottom left
      if (this.isBottomLeftEqual(coords.column, coords.row)) {
        console.log(true);
        if (this.isBottomLeftEqual(coords.column-1, coords.row+1)) {
          console.log(true);
          if (this.isBottomLeftEqual(coords.column-2, coords.row+2)) {
              return true;
          }
        }
      }
    },
    toggleTurn() {
      // Change the player
      this.$store.commit('toggleTurn', {});
    },
    isNextHorizontalEqual(col, row){
      if(col === 6) {
        return false;
      }
      return this.columns[col+1].coins[row].status === true && this.columns[col+1].coins[row].color === this.columns[col].coins[row].color;
    },
    isNextVerticalEqual(col, row){
      if(row === 5) {
        return false;
      }
      return this.columns[col].coins[row+1].status === true && this.columns[col].coins[row+1].color === this.columns[col].coins[row].color;
    },
    isPreviousHorizontalEqual(col, row){
      if(col === 0) {
        return false;
      }
      return this.columns[col-1].coins[row].status === true && this.columns[col-1].coins[row].color === this.columns[col].coins[row].color;
    },
    isBottomRightEqual(col, row) {
      if(col === 6 || row === 5) {
        return false;
      }
      return this.columns[col+1].coins[row+1].status === true && this.columns[col+1].coins[row+1].color === this.columns[col].coins[row].color;
    },
    isBottomLeftEqual(col, row) {
      if(col === 0 || row === 5) {
        return false;
      }
      return this.columns[col-1].coins[row+1].status === true && this.columns[col-1].coins[row+1].color === this.columns[col].coins[row].color;
    }
  }
}
</script>

<style lang="scss">
.board {
  margin: 0 auto;
  padding: 15px 0;
}
</style>
