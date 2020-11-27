<template>
  <Page>
    <template v-slot:section-header>
      <h2>Pokemon list</h2>
    </template>
    <template v-slot:section-content>
      <div class="poke-list">
      <div class="pokemon" v-for="pokemon in pokemons" :key="pokemon.pokemonId">
        <div>{{pokemon.pokemonId}}.</div>
        <img :src="pokemon.image">
        <div>{{ pokemon.name }}</div>
        <div>hp = {{pokemon.hp}}</div>
        <div>atk = {{pokemon.attack}}</div>
        <div>defense = {{pokemon.defense}}</div>
      </div>
    </div>
    </template>

  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
export default {
  name: 'pokemonList',
  props: {
    pokemons: Array,
  },
  components: {
    Page,
  },
};
</script>

<style scoped>
img {
  width:60px;
  height:100%;
}

.pokemon {
  display: flex;
}

</style>
