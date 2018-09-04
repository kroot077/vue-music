import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let musicApi = Axios.create({
  baseURL: "https://itunes.apple.com/search?term=",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    songs: []
  },
  mutations: {
    setSongs(state, data) {
      state.songs = data
    } 
  },
  actions: {
    search({commit, dispatch}, searchTerm) {
      musicApi.get(searchTerm)
        .then(res => {
          commit('setSongs', res.data.results)
        })
    },
    //addToPlaylist
  }
})
