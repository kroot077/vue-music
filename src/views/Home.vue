<template>
  <div class="home">
    <form @submit.prevent="search">
        <input type="text" v-model="songList" placeholder="Song Title">
        <button type="submit">Search</button>
    </form>
    <div class="">
      <Song></Song>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Song from '@/components/Songs.vue'

export default {
  name: 'home',
  data(){
    return{
      songList: {}
    }
  },
  computed: {
    songs() {
      return this.$store.state.songs
    }
  },
  methods: {
    search() {
      this.$store.dispatch("search", this.songList)
    }
  },
  components: {
    Song
  }
}
</script>
