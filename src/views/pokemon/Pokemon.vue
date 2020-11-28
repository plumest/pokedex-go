<template>
  <Page>
    <Loading v-if="isLoading" />

    <template v-slot:section-header v-if="!isLoading">
      <div class="container">
        <div class="d-flex align-items-center">
          <router-link class="back-button" to="/">
            <i class="fas fa-caret-square-left"></i>
          </router-link>
          <h2 class="ml-2 topic-header">{{ pokemon.name }}</h2>
        </div>
      </div>
    </template>

    <template v-slot:section-content v-if="!isLoading">
      <div class="container">
        <div class="info-layout">
          <div class="info">
            <img :src="pokemon.image" />
            <div class="container info-background">
              <div class="topic">
                <h3>Information</h3>
              </div>
              <div class="row">
                <div class="col-sm">
                  <div class="info-item">
                    <div class="info-item-topic">Pokedex id</div>
                    <div class="info-item-content">
                      {{ pokemon.pokemonId }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Primary Type</div>
                    <div class="info-item-content">
                      {{ pokemon.primaryType }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Attack</div>
                    <div class="info-item-content">
                      {{ pokemon.attack }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Hp</div>
                    <div class="info-item-content">
                      {{ pokemon.hp }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Legendary</div>
                    <div class="info-item-content">
                      {{ pokemon.legendary }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Weight</div>
                    <div class="info-item-content">
                      {{ pokemon.weight }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Capture rate</div>
                    <div class="info-item-content">
                      {{ pokemon.captureRate }}
                    </div>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="info-item">
                    <div class="info-item-topic">Generation</div>
                    <div class="info-item-content">
                      {{ pokemon.generation }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Secondary Type</div>
                    <div class="info-item-content">
                      {{ pokemon.secondaryType ? pokemon.secondaryType: "-" }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Defense</div>
                    <div class="info-item-content">
                      {{ pokemon.defense }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Stamina</div>
                    <div class="info-item-content">
                      {{ pokemon.stamina }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Cp</div>
                    <div class="info-item-content">
                      {{ pokemon.cp }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Height</div>
                    <div class="info-item-content">
                      {{ pokemon.height }}
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-item-topic">Escape rate</div>
                    <div class="info-item-content">
                      {{ pokemon.escapeRate }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="stat mt-3">
            <div class="container">
              <div class="topic">
                <h3>Statistics</h3>
              </div>
            </div>
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
  created() {
    this.loadPokemon(this.$route.params.pokemonId);
  },
  data() {
    return {
      pokemon: null,
      isLoading: true,
    };
  },
  methods: {
    async loadPokemon(id) {
      console.log(id);
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
                    {
                      pokemon(pokemonId:${id}) {
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
                      }
                    }`,
        }),
      });
      const json = await response.json();
      console.log(json);
      const data = json.data.pokemon;
      this.pokemon = data;
      this.isLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';

.info-layout {
  background-color: #b0413e;
  padding: 1rem;
  .info {
    display: flex;
    font-size: $spacer;
    justify-content: flex-start;
    img {
      display: block;
      width: 50%;
      height: 100%;
    }
    .information {
      // margin-left: 1rem;
      flex-grow: 1;
      .info-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
      }
    }
  }
}

.back-button {
  font-size: $font-size-lg;
}

.info-background {
  background-color: #f5b041;
  padding: 1rem 1rem;
}

.info-item-topic {
  text-decoration-line: underline;
}

.stat {
  background-color: #caa365;
}
.topic-header {
  text-decoration: underline;
}
</style>
