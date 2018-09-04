<template>
  <div class="hello">
    <p>{{song.trackName}}</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'Song',
  computed: {
    song() {
      return this.$store.state.songs
    }
  }
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
