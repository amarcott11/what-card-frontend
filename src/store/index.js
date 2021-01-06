import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'https://api.whatcardfor.me/api'
//axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export default new Vuex.Store({
  state: {
    user: null,
    filters: {
      q1: 1,
      q2: 1,
      q3: 1,
      q4: 1,
      q5: 1
    }
  },

  mutations: {
    setUserData (state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
    },

    clearUserData () {
      localStorage.removeItem('user')
      location.reload()
    }
  },

  actions: {
    login ({ commit }, credentials) {
      return axios
        .post('/login', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },

    logout ({ commit }) {
      commit('clearUserData')
    },

    register ({ commit }, credentials) {
      return axios
        .post('/register', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    },

    userattrs ({ commit }, credentials ) {
      console.log(credentials);
      return axios
        .post('/userattrs', credentials)
        .then(({ data }) => {
          commit('setUserData', data)
        })
    }
  },

  getters: {
    isLogged: state => !!state.user,
    user: state => state.user
  }
})
