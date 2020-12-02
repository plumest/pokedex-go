<template>
  <Page>
    <Loading v-if="isLoading" />

    <template v-slot:section-header v-if="!isLoading">
      <div class="container pb-0">
        <div class="d-flex align-items-center">
          <router-link class="back-button" to="/">
            <i class="fas fa-caret-square-left"></i>
          </router-link>
          <h1 class="poke-name">{{ pokemon.name }}</h1>
        </div>
      </div>
    </template>

    <template v-slot:section-content v-if="!isLoading">
      <div class="pokemon-container">
        <div class="image-wrapper">
          <img class="poke-image" :src="pokemon.image" :alt="pokemon.name">
        </div>

        <div class="content-wrapper">
          <!--     Pokemon stat     -->
          <div class="poke-stat">
            <h1 class="content-header">
              Pokemon Stats
            </h1>

            <!--      TYPE Weight Height      -->
            <div class="standard-stat">
              <div class="type-wrapper">
                <span>{{ pokemon.primaryType }}</span>
                <span>{{ pokemon.secondaryType }}</span>
                <p>Type</p>
              </div>

              <div class="weight-wrapper">
                <span>{{ pokemon.weight.toFixed(2) }} kg</span>
                <p>Weight</p>
              </div>

              <div class="height-wrapper">
                <span>{{ pokemon.height.toFixed(2) }} m</span>
                <p>Height</p>
              </div>
            </div>
            <!--      TYPE Weight Height      -->

            <!--      ATK DEF STA CP      -->
            <div class="advance-stat">
              <div class="cp-wrapper">
                <p>Max CP</p>

                <div class="progress">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    :style="{width: (pokemon.cp / 4431 * 100) + '%'}"
                    :aria-valuenow="pokemon.cp / 4431 * 100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >{{ pokemon.cp }}</div>
                </div>
              </div>

              <div class="weight-wrapper">
                <p>ATK</p>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    :style="{width: (pokemon.attack / 345 * 100) + '%'}"
                    :aria-valuenow="pokemon.attack / 345 * 100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span>{{ pokemon.attack }}</span>
                  </div>
                </div>
              </div>

              <div class="height-wrapper">
                <p>DEF</p>
                <div class="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    :style="{width: (pokemon.defense / 396 * 100) + '%'}"
                    :aria-valuenow="pokemon.defense / 396 * 100"
                    aria-valuemin="0" aria-valuemax="100"
                  >
                    <span>{{ pokemon.defense }}</span>
                  </div>
                </div>
              </div>

              <div class="height-wrapper">
                <p>STA</p>
                <div class="progress">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    :style="{width: (pokemon.stamina / 496 * 100) + '%'}"
                    :aria-valuenow="pokemon.stamina / 496 * 100"
                    aria-valuemin="0" aria-valuemax="100"
                  >
                    <span>{{ pokemon.stamina }}</span>
                  </div>
                </div>
              </div>
            </div>
            <!--      ATK DEF STA CP      -->
          </div>
          <!--     Pokemon stat     -->

          <!--    Pokemon Egg      -->
          <div class="poke-egg" v-if="!!egg">
            <h1>Pokemon Egg</h1>
          </div>

        </div>
      </div>
    </template>
  </Page>
</template>

<script>
// Get $route.params.id
import Page from '@/components/Page.vue';
import Loading from '@/components/Loading';

export default {
  name: 'pokemon',
  components: {
    Page,
    Loading,
  },
  data() {
    return {
      pokemon: null,
      isLoading: true,
      egg: null,
    };
  },
  async created() {
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
          {
            pokemon(pokemonId:${this.$route.params.pokemonId}) {
              attack
              captureRate
              cp
              defense
              escapeRate
              generation
              height
              hp
              image
              legendary
              name
              pokemonId
              primaryType
              secondaryType
              stamina
              weight
                egg{
                   distance
                   maxCp
                   minCp
                 }
            }
          }`,
      })
    });
    const json = await response.json();
    this.pokemon = json.data.pokemon;
    this.egg = json.data.pokemon.egg;
    this.isLoading = false;
  },
  methods: {
    capitalize(text) {
      return text[0].toUpperCase() + text.slice(1).toLowerCase()
    }
  },

};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  min-height: 250px;
  margin-bottom: 2rem;

  .poke-image {

  }
}

.standard-stat {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  grid-template-rows: 100px;
  text-align: center;
  align-items: center;
  border: 1px solid #bedcfa;
  margin-top: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 5px #ddd;

  div {
    span + p {
      font-size: 0.8rem;
      color: #b1b1b1;
    }
  }

  div ~ div {
    border-left: 1px solid #bedcfa;
  }
}

.advance-stat {
  margin-bottom: 2rem;
}
</style>
