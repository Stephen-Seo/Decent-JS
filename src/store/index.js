import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// eslint-disable-next-line
const store = new Vuex.Store({ 
  state: {
    username: '',
    api_token: '',
    server_address: '192.168.0.122',
    server_port: '8080',
    status: {
      type: '',
      message: ''
    }
  },
  actions: {
    login (context, credentials) {
      axios.post(context.getters.server + '/authenticate', credentials).then((r) => {
        if (r.data.error) {
          context.dispatch('notify', {
            type: 'error',
            message: r.data.error
          })
          return
        }
        context.commit('setUsername', r.data.result.username)
        context.commit('setApiToken', r.data.result.api_token)
        context.dispatch('notify', {
          type: 'success',
          message: 'Logged in as ' + r.data.result.username
        })
      }, (e) => {
        context.dispatch('notify', {
          type: 'error',
          message: e
        })
      })
    },
    logout (context) {
      context.commit('setUsername', '')
      context.commit('setApiToken', '')
      context.dispatch('notify', {
        type: 'success',
        message: 'Logged out'
      })
    },
    notify ({ commit }, status) {
      commit('setStatus', status)
      console.log(status.type + ': ' + status.message)
    }
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
    },
    setApiToken (state, token) {
      state.api_token = token
    },
    setStatus (state, status) {
      state.status = status
    }
  },
  getters: {
    server (state) {
      return 'http://' + state.server_address + ':' + state.server_port
    },
    authenticated (state) {
      return state.api_token !== ''
    }
  }
})

export default store
