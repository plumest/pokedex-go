<template>
  <Page>
    <Loading v-if="!pokemonList" />
    <template v-slot:section-header>
      <div class="d-flex justify-content-center align-items-baseline">
        <div class="">
          <input
            class="filter-box form-control form-control-search"
            placeholder="Enter pokemon name"
            v-model="filter.name"
            @keyup.enter.prevent="handleSearch"
          />
        </div>
        <router-link class="report ml-5 h4" to="/report">
          see report
        </router-link>
      </div>
    </template>

    <template v-slot:section-content>
      <div class="poke-list" v-if="pokemonList">
        <div
          class="pokemon"
          v-for="pokemon in pokemonList"
          :key="pokemon.pokemonId"
          @click="seePokemon(pokemon.pokemonId)"
          :style="{ width: isDisplay(pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="pokemon"
            v-if="isDisplay(pokemon)"
          />
        </div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
import Loading from '@/components/Loading';
import Card from "@/components/Card";

export default {
  name: 'pokemonList',
  components: {
    Page,
    Loading,
    Card,
  },
  data() {
    return {
      filter: {
        name: '',
        type: '',
        cp: 0,
        generation: 0,
        legendary: null
      },
    };
  },
  computed: {
    pokemonList() {
      return this.$store.state.pokemons;
    },
    searchByName() {
      return this.filter.name;
    },
    filterStore() {
      return this.$store.state.filter
    }
  },
  methods: {
    seePokemon: function(id) {
      this.$router.push(`/pokemon/${id}`);
    },
    isDisplay(pokemon) {
      return pokemon.name.toLowerCase().includes(this.filterStore.name.toLowerCase()) || !this.filterStore.name
    },
    handleSearch() {
      this.$store.dispatch('setSearch', this.filter.name)
    }
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';

@keyframes snooze {
  50% {
    transform: translateY(-10px);
  }
}

img {
  width: 60px;
  height: 100%;
}

.poke-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .pokemon {
    width: 25%;
    transition: 0.3s;
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
  cursor: pointer;
  animation: snooze;
  animation-duration: 0.3s;
  animation-iteration-count: 1;
}

.filter-box {
  &:focus {
    box-shadow: none;
  }
}

.topic-header {
  text-decoration: underline;
}
</style>
