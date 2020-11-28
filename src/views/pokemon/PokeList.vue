<template>
  <Page>
    <Loading v-if="!pokemons" />
    <template v-slot:section-header>
      <div class="d-flex align-items-baseline">
        <h2 class="topic-header">Pokemon list</h2>
        <div class="ml-3">
          <input
            class="form-control form-control-search"
            placeholder="search by name"
            v-model="filter.name"
          />
        </div>
        <router-link class="report ml-5 h4" to="/report">
          see report
        </router-link>
      </div>
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
            Type = {{ pokemon.primaryType }},
            {{ pokemon.secondaryType ? pokemon.secondaryType : '-' }}
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
//import _ from 'loadash';
import Page from '@/components/Page.vue';
import Loading from '@/components/Loading';

export default {
  name: 'pokemonList',
  components: {
    Page,
    Loading,
  },
  computed: {
    pokemonsStore() {
      return this.$store.state.pokemons;
    },
    searchByName() {
      return this.filter.name;
    },
  },
  created() {
    this.pokemons = this.pokemonsStore;
  },
  watch: {
    searchByName() {
      // if(!this.searchByName) {
      //   this.pokemons = _.find(this.pokemons, (p)=>{
      //     return p.name.includes(this.searchByName);
      //   });
      // }
    },
  },
  data() {
    return {
      filter: {
        name: '',
        type: '',
      },
      pokemons: null,
    };
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
  padding: 0.5 * $spacer 0;
  // border: black 1px solid;
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

.report {
  background-color: #de785d;
  color: black;
  border-radius: 5px;
  width: 12%;
  height: 30px;
  text-align: center;
}

.pokemon:hover {
  background-color: $success;
  cursor: pointer;
}

.topic-header {
  text-decoration: underline;
}
</style>
