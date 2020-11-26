<template>
  <div class="poke-list">
    <div v-for="pokemon in pokemons" :key="pokemon.id">
      <h1>{{ pokemon.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "pokemonList",
  props: {
    pokemons: Array
  }
}
</script>

<style scoped>

</style>