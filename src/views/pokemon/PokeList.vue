<template>
  <Page>
    <Loading v-if="!pokemonList" />
    <template v-slot:section-header>
      <div class="d-flex justify-content-center align-items-baseline">

        <div class="search-container">
          <!--    Search Input    -->
          <input
            class="search-box form-control form-control-search"
            placeholder="Enter pokemon name"
            v-model="filter.name"
            @keyup.enter.prevent="handleSearch($event)"
          />

          <!--    Search Dropdown    -->
          <div class="search-dropdown">
            <div
              class="search-content"
              v-for="pokemon in pokemonList"
              :key="pokemon.name"
            >
              <span
                v-if="pokemon.name.toLowerCase().includes(filter.name.toLowerCase()) || !filter.name"
                role="button"
                @click.prevent="handleSearch($event)"
              >{{ pokemon.name }}</span>
            </div>
          </div>

        </div>
        <router-link class="report ml-5 h4" to="/report">
          see report
        </router-link>
        <span
          role="button"
          @click="handleSearch($event)"
        >{{ 'Venusaur' }}</span>
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
      console.log(id);
      this.$router.push(`/pokemon/${id}`);
    },
    isDisplay(pokemon) {
      return pokemon.name.toLowerCase().includes(this.filterStore.name.toLowerCase()) || !this.filterStore.name
    },
    handleSearch(event) {
      console.log(event)
      if (event.type === 'keyup') {
        this.$store.dispatch('setSearch', event.target.value)
      } else {
        this.$store.dispatch('setSearch', event.target.innerHTML)
      }
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

.search-container {
  position: relative;

  .search-box {
    width: 100%;

    &:focus {
      box-shadow: none;

      + .search-dropdown {
        display: block;
      }
    }
  }

  .search-dropdown {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    max-height: 256px;
    overflow-y: scroll;
    top: 40px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    z-index: 1;

    .search-content {

      span {
        padding-left: 12px;
        height: 32px;
        line-height: 32px;
      }

      &:hover {
        color: #ffffff;
        cursor: pointer;
        background-color: #b0413e;
      }
    }

    .search-content-leave-active {

      .span {
        padding-left: 0;
        height: 0;
        line-height: 0;
      }
    }
  }
}

.topic-header {
  text-decoration: underline;
}
</style>
