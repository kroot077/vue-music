<template>
  <div class="home">
    <form @submit.prevent="search">
        <input type="text" placeholder="Song Title" v-model="query">
        <button type="submit">Search</button>
    </form>
    <h1>Search Results</h1>
    <div class="column">
      <div class="row">
        <Song :songData="songs">
        </Song>
      </div>
    </div>
    <h1>My Playlist</h1>
    <div class="column">
      <div class="row">
        <Playlist :playData="playlists"></Playlist>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Song from '@/components/Songs.vue'
import Playlist from '@/components/Playlist.vue'

export default {
  name: 'home',
  data(){
    return{
      songList: {},
      query: ''
    }
  },
  computed: {
    songs() {
      return this.$store.state.songs
    },
    playlists() {
      return this.$store.state.playlists
    }
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.query)
      console.log(this.search)
    },
    addToPlaylist() {
      this.$store.dispatch()
    }
    //removeFromPlaylist() {}
  },
  components: {
    Song,
    Playlist
  }
}
</script>
