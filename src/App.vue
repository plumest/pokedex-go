<template>
  <div id="app">
    <Loading v-if="isLoading"/>
    <div class="container">
      <PokeList :pokemons="pokemons"/>
    </div>
  </div>
</template>

<script>
import PokeList from "@/views/PokeList";
import Loading from "@/components/Loading";

export default {
  name: 'App',
  components: {
    PokeList,
    Loading
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons
    },
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  async mounted() {
    this.$store.dispatch('setLoading', true)
    await this.$store.dispatch('loadData')
    this.$store.dispatch('setLoading', false)
  },
}
</script>

<style>
#app {

}

.stop-scrolling {
  height: 100%;
  overflow: hidden;
}
</style>
