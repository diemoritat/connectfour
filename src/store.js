import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gameStatus: {
      turn: 'red',
      winner: ''
    }
  },
  mutations: {
    toggleTurn(state) {
      if (state.gameStatus.turn === 'red') {
        state.gameStatus.turn = 'black';
      } else {
        state.gameStatus.turn = 'red';
      }
    },
  },
  actions: {

  }
})
