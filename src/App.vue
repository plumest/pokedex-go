<template>
  <div id="app">
    <div class="container">
      <PokeList :pokemons="pokemons"/>
    </div>
  </div>
</template>

<script>
import PokeList from "@/views/PokeList";

export default {
  name: 'App',
  components: {
    PokeList
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons
    }
  },
  async mounted() {
    await this.$store.dispatch('loadData')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
