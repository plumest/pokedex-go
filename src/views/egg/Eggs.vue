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
      </div>
    </template>

    <template v-slot:section-content>
      <div class="poke-list" v-if="eggs.km2">
        <div class="distance-wrapper">
          <h1 class="distance">2 km</h1>
        </div>
        <div
          class="pokemon"
          v-for="egg in eggs.km2"
          :key="egg.pokemon.pokemonId"
          @click="seePokemon(egg.pokemon.pokemonId)"
          :style="{ width: isDisplay(egg.pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="egg.pokemon"
            v-if="isDisplay(egg.pokemon)"
          />
        </div>
      </div>

      <div class="poke-list" v-if="eggs.km5">
        <div class="distance-wrapper">
          <h1 class="distance">5 km</h1>
        </div>
        <div
          class="pokemon"
          v-for="egg in eggs.km5"
          :key="egg.pokemon.pokemonId"
          @click="seePokemon(egg.pokemon.pokemonId)"
          :style="{ width: isDisplay(egg.pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="egg.pokemon"
            v-if="isDisplay(egg.pokemon)"
          />
        </div>
      </div>

      <div class="poke-list" v-if="eggs.km7">
        <div class="distance-wrapper">
          <h1 class="distance">7 km</h1>
        </div>
        <div
          class="pokemon"
          v-for="egg in eggs.km7"
          :key="egg.pokemon.pokemonId"
          @click="seePokemon(egg.pokemon.pokemonId)"
          :style="{ width: isDisplay(egg.pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="egg.pokemon"
            v-if="isDisplay(egg.pokemon)"
          />
        </div>
      </div>

      <div class="poke-list" v-if="eggs.km10">
        <div class="distance-wrapper">
          <h1 class="distance">10 km</h1>
        </div>
        <div
          class="pokemon"
          v-for="egg in eggs.km10"
          :key="egg.pokemon.pokemonId"
          @click="seePokemon(egg.pokemon.pokemonId)"
          :style="{ width: isDisplay(egg.pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="egg.pokemon"
            v-if="isDisplay(egg.pokemon)"
          />
        </div>
      </div>

      <div class="poke-list" v-if="eggs.ASkm5">
        <div class="distance-wrapper">
          <h1 class="distance">Adventure Sync 5 km</h1>
        </div>
        <div
          class="pokemon"
          v-for="egg in eggs.ASkm5"
          :key="egg.pokemon.pokemonId"
          @click="seePokemon(egg.pokemon.pokemonId)"
          :style="{ width: isDisplay(egg.pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="egg.pokemon"
            v-if="isDisplay(egg.pokemon)"
          />
        </div>
      </div>

      <div class="poke-list" v-if="eggs.ASkm10">
        <div class="distance-wrapper">
          <h1 class="distance">Adventure Sync 10 km</h1>
        </div>
        <div
          class="pokemon"
          v-for="egg in eggs.ASkm10"
          :key="egg.pokemon.pokemonId"
          @click="seePokemon(egg.pokemon.pokemonId)"
          :style="{ width: isDisplay(egg.pokemon) ? '' : 0}"
        >
          <Card
            :pokemon="egg.pokemon"
            v-if="isDisplay(egg.pokemon)"
          />
        </div>
      </div>
    </template>
  </Page>
</template>

<script>
import Page from "@/components/Page";
import Loading from "@/components/Loading";
import Card from "@/components/Card";

export default {
  name: "Eggs",
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
  components: {
    Page,
    Loading,
    Card,
  },
  async mounted() {
    await this.$store.dispatch('setLoading', true)
    await this.$store.dispatch('loadEgg', 'km2')
    await this.$store.dispatch('loadEgg', 'km5')
    await this.$store.dispatch('loadEgg', 'km7')
    await this.$store.dispatch('loadEgg', 'km10')
    await this.$store.dispatch('loadEgg', 'ASkm5')
    await this.$store.dispatch('loadEgg', 'ASkm10')
    await this.$store.dispatch('setLoading', false)
  },
  computed: {
    eggs() {
      return this.$store.state.eggs;
    },
    pokemonList() {
      let pokemons = [
        ...this.eggs.km2,
        ...this.eggs.km5,
        ...this.eggs.km7,
        ...this.eggs.km10,
        ...this.eggs.ASkm5,
        ...this.eggs.ASkm10
      ]
      return pokemons.map(egg => {
        return egg.pokemon
      })
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
    handleSearch(event) {
      console.log(event)
      if (event.type === 'keyup') {
        this.$store.dispatch('setSearch', event.target.value)
      } else {
        this.$store.dispatch('setSearch', event.target.innerHTML)
      }
    }
  },
}
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

  .distance-wrapper {
    background-color: #153e90;
    border-left: 1rem solid #54e346;
    color: #ffffff;
    width: 100%;
    margin: 1.5rem 1rem;
    padding-left: 1rem;
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
