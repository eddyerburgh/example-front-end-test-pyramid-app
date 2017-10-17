import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  displayModal: false
}

const mutations = {
  toggleModalState (state) {
    state.displayModal = !state.displayModal
  }
}

const actions = {
  toggleModal: ({ commit }) => commit('toggleModalState')
}

const getters = {
  displayModal: state => state.displayModal
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
