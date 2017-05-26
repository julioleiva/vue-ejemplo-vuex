import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const getters = {
  ParOImpar: state => state.count % 2 === 0 ? 'par' : 'impar'
}

const mutations = {
  sumar (state) {
    state.count++;
  },
  restar (state) {
    state.count--;
  }
}

const actions = {
  sumar: ({ commit }) => commit('sumar'),
  restar: ({ commit }) => commit('restar'),
  sumarSiImpar: ({commit, state}) => {
    if ((state.count + 1) % 2 === 0) {
      commit('sumar')
    }
  },
  sumarAsync: ({ commit }) => {
    return new Promise((response, reject) => {
      setTimeout(() => {
        commit('sumar')
        resolve()
      }, 1000)
    })
  }

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
