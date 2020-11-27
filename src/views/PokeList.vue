<template>
  <Page>
    <template v-slot:section-header>
      <h2>Pokemon list</h2>
    </template>
    <template v-slot:section-content>
      <div class="poke-list">
        <div
          class="pokemon"
          v-for="pokemon in pokemons"
          :key="pokemon.pokemonId"
        >
          <div>{{ pokemon.pokemonId }}#</div>
          <div><img :src="pokemon.image" /></div>
          <div class="pokename">{{ pokemon.name }}</div>
          <div class="pokeType">Type = {{ pokemon.primaryType}}</div>
          <div class="pokeinfo">hp = {{ pokemon.hp }}</div>
          <div class="pokeinfo">atk = {{ pokemon.attack }}</div>
          <div class="pokeinfo">defense = {{ pokemon.defense }}</div>
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

<style lang="scss" scoped>
img {
  width: 60px;
  height: 100%;
}

.pokemon > div {
  margin-right: 1rem;
}
.pokemon {
  margin: 1rem 0;
  display: flex;
  align-items: center;

  .pokename {
    width:10%;
  }
  .pokeType {
    width: 18%
  }
  .pokeinfo {
    width: 10%;
  }
}
</style>
