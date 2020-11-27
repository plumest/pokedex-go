<template>
  <Page>
    <template v-slot:section-header>
      <h2>Pokemon list</h2>
    </template>
    <template v-slot:section-content>
      <div class="poke-list">
      <div v-for="pokemon in pokemons" :key="pokemon.id">
        <h5>{{ pokemon.name }}</h5>
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

<style scoped></style>
