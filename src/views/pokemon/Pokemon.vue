<template>
  <Page>
    <Loading v-if="isLoading" />

    <template v-slot:section-header v-if="!isLoading">
      <div class="container pb-0">
        <div class="d-flex align-items-center">
          <h1 class="poke-name">{{ pokemon.name }}</h1>
        </div>
      </div>
    </template>

    <template v-slot:section-content v-if="!isLoading">
      <div class="pokemon-container">
        <div class="image-wrapper">
          <video width="320" height="240" autoplay muted loop v-if="pokemon.highImg">
            <source :src="pokemon.highImg" type="video/mp4">
            <img class="poke-image" :src="pokemon.image" :alt="pokemon.name">
          </video>
          <img class="poke-image" :src="pokemon.image" :alt="pokemon.name" v-else>
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
                <span>{{ capitalize(pokemon.primaryType) }} </span>
                <span v-if="pokemon.secondaryType">{{ capitalize(pokemon.secondaryType) }}</span>
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
                  >
                    <span class="progress-badge">{{ pokemon.cp }}</span>
                  </div>
                </div>
              </div>

              <div class="attack-wrapper">
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
                    <span class="progress-badge">{{ pokemon.attack }}</span>
                  </div>
                </div>
              </div>

              <div class="defense-wrapper">
                <p>DEF</p>
                <div class="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    :style="{width: (pokemon.defense / 396 * 100) + '%'}"
                    :aria-valuenow="pokemon.defense / 396 * 100"
                    aria-valuemin="0" aria-valuemax="100"
                  >
                    <span class="progress-badge">{{ pokemon.defense }}</span>
                  </div>
                </div>
              </div>

              <div class="stamina-wrapper">
                <p>STA</p>
                <div class="progress">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    :style="{width: (pokemon.stamina / 496 * 100) + '%'}"
                    :aria-valuenow="pokemon.stamina / 496 * 100"
                    aria-valuemin="0" aria-valuemax="100"
                  >
                    <span class="progress-badge">{{ pokemon.stamina }}</span>
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

            <div class="standard-stat">
              <div class="height-wrapper">
                <span>{{ egg.distance }}</span>
                <p>Distance</p>
              </div>

              <div class="height-wrapper">
                <span>{{ egg.minCp }}</span>
                <p>Min CP</p>
              </div>

              <div class="height-wrapper">
                <span>{{ egg.maxCp }}</span>
                <p>Max CP</p>
              </div>
            </div>
          </div>
          <!--    Pokemon Egg      -->

          <!--    Pokemon Type Match Up      -->
          <div class="poke-egg" v-if="!!damageToType">
            <h1 class="damage-header">Damage to Type</h1>

            <div class="damage-types">
              <div class="height-wrapper">
                <span>{{ damageToType.normal.toFixed(2) }}</span>
                <p>Normal</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.fire.toFixed(2) }}</span>
                <p>Fire</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.water.toFixed(2) }}</span>
                <p>Water</p>
              </div>
            </div>

            <div class="damage-types">
              <div class="height-wrapper">
                <span>{{ damageToType.electric.toFixed(2) }}</span>
                <p>Electric</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.grass.toFixed(2) }}</span>
                <p>Grass</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.ice.toFixed(2) }}</span>
                <p>Ice</p>
              </div>
            </div>

            <div class="damage-types">
              <div class="height-wrapper">
                <span>{{ damageToType.fighting.toFixed(2) }}</span>
                <p>Fighting</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.poison.toFixed(2) }}</span>
                <p>Poison</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.ground.toFixed(2) }}</span>
                <p>Ground</p>
              </div>
            </div>

            <div class="damage-types">
              <div class="height-wrapper">
                <span>{{ damageToType.flying.toFixed(2) }}</span>
                <p>Flying</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.psychic.toFixed(2) }}</span>
                <p>Psychic</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.bug.toFixed(2) }}</span>
                <p>Bug</p>
              </div>
            </div>

            <div class="damage-types">
              <div class="height-wrapper">
                <span>{{ damageToType.rock.toFixed(2) }}</span>
                <p>Rock</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.ghost.toFixed(2) }}</span>
                <p>Ghost</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.dragon.toFixed(2) }}</span>
                <p>Dragon</p>
              </div>
            </div>

            <div class="damage-types">
              <div class="height-wrapper">
                <span>{{ damageToType.dark.toFixed(2) }}</span>
                <p>Dark</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.steel.toFixed(2) }}</span>
                <p>Steel</p>
              </div>

              <div class="height-wrapper">
                <span>{{ damageToType.fairy.toFixed(2) }}</span>
                <p>Fairy</p>
              </div>
            </div>
          </div>
          <!--    Pokemon Type Match Up      -->

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
      damageToType: null
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
              highImg
                egg {
                   distance
                   maxCp
                   minCp
                 }
                damageType {
                   bug
                   dark
                   dragon
                   electric
                   fairy
                   fighting
                   fire
                   flying
                   ghost
                   grass
                   ground
                   ice
                   normal
                   poison
                   psychic
                   rock
                   steel
                   water
                }
            }
          }`,
      })
    });
    const json = await response.json();
    this.pokemon = json.data.pokemon;
    this.egg = json.data.pokemon.egg;
    this.damageToType = json.data.pokemon.damageType;
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

.standard-stat, .damage-types {
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
    padding-top: 1rem;
    padding-bottom: 1rem;

    span + p {
      font-size: 0.8rem;
      color: #b1b1b1;
    }

    p {
      margin-bottom: 0;
    }
  }

  div ~ div {
    border-left: 1px solid #bedcfa;
  }
}

.advance-stat {
  margin-bottom: 2rem;

  div {

    p {
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 1rem;
      margin-bottom: 0;
    }

    .progress {
      height: 1.8rem;

      .progress-bar {
        text-align: left;
        text-indent: 2rem;
        font-size: 1rem;

        .progress-badge {
          background-color: white!important;
        }
      }
    }
  }
}

.damage-types {
  margin: 0;
}

.damage-header {
  margin-bottom: 1rem;
}
</style>
