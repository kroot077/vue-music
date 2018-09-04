<template>
  <div class="hello">
    <div v-for="playlist in playData" class="play-result" :key="song.trackId">
      <img :src="song.artworkUrl100">
      <p>Song: {{song.trackName}}</p>
      <p>Artist: {{song.artistName}}</p>
      <p>Album: {{song.collectionName}}</p>
      <audio controls :src=song.previewUrl type="audio/mpeg" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Playlist',
  computed: {
    song() {
      return this.$store.state.playlists
      console.log(playlists)
    }
  },
  props: ["playData"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>