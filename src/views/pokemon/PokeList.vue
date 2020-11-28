<template>
  <Page>
    <Loading v-if="!pokemons" />
    <template v-slot:section-header>
      <h2>Pokemon list</h2>
    </template>
    <template v-slot:section-content>
      <div class="poke-list" v-if="pokemons">
        <div
          class="pokemon"
          v-for="pokemon in pokemons"
          :key="pokemon.pokemonId"
          @click="seePokemon(pokemon.pokemonId)"
        >
          <div>{{ pokemon.pokemonId }}#</div>
          <div><img :src="pokemon.image" /></div>
          <div class="pokename">{{ pokemon.name }}</div>
          <div class="pokeType">
            Type = {{ pokemon.primaryType }}, {{ pokemon.secondaryType }}
          </div>
          <div class="pokeinfo">hp = {{ pokemon.hp }}</div>
          <div class="pokeinfo">atk = {{ pokemon.attack }}</div>
          <div class="pokeinfo">defense = {{ pokemon.defense }}</div>
          <div class="pokeinfo ml-lg-5">cp = {{ pokemon.cp }}</div>
        </div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import Loading from '@/components/Loading';

export default {
  name: 'pokemonList',
  components: {
    Page,
    Loading,
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons;
    },
  },
  methods: {
    seePokemon: function(id) {
      console.log(id);
      this.$router.push(`/pokemon/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';

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
    width: 10%;
  }
  .pokeType {
    width: 18%;
  }
  .pokeinfo {
    width: 10%;
  }
}

.pokemon:hover {
  background-color: $success;
  cursor: pointer;
}
</style>
