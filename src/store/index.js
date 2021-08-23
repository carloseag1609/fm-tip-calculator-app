import { createStore } from 'vuex'

export default createStore({
  state: {
    bill: 0,
    tip: 0,
    people: 0
  },
  mutations: {
    setBill(state, bill) {
      state.bill = Number(bill)
    },
    setTip(state, tip) {
      state.tip = Number(tip)
    },
    setPeople(state, people) {
      state.people = Number(people)
    },
    resetState(state) {
      state.bill = 0
      state.tip = 0
      state.people = 0
    }
  },
  getters: {
    isEmptyState(state) {
      return state.tip === 0 || state.bill === 0 || state.people === 0
    },
    getTip(state) {
      return (state.tip * state.bill) / 100
    },
    getTipAmountByPerson(state, getters) {
      const tip = getters.getTip
      const tipAmountByPerson = (
        state.people === 0 ||
        state.bill === 0 ||
        state.tip === 0
      ) ? 0 : tip / state.people
      return tipAmountByPerson.toFixed(2)
    },
    getTotalByPerson(state) {
      const tip = (state.tip * state.bill) / 100
      const totalByPerson = (
        state.people === 0 ||
        state.bill === 0 ||
        state.tip === 0
      ) ? 0 : (state.bill + tip) / state.people
      return totalByPerson.toFixed(2)
    }
  }
})

