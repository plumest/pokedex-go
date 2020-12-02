import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pokemons: [],
        eggs: {
          km2: [],
          km5: [],
          km7: [],
          km10: [],
          ASkm5: [],
          ASkm10: []
        },
        isLoading: false,
        filter: {
          name: '',
          type: '',
          cp: 0,
          generation: 0,
          legendary: null
        }
    },
    mutations: {
        setData(state, data) {
            state.pokemons = data
        },
        setLoading(state, value) {
            state.isLoading = value
        },
        setSearch(state, value) {
            state.filter.name = value
        },
        setEggs(state, data) {
            let key = data[0].distance
            state.eggs[key] = data
        }
    },
    actions: {
        async loadData(context) {
            const response = await fetch('http://localhost:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                    {
                      pokemons {
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
                    }`
                })
            });
            const json = await response.json();
            const data = json.data.pokemons;
            context.commit('setData', data)
        },
        setLoading(context, value) {
            document.body.classList.toggle('stop-scrolling')
            context.commit('setLoading', value)
        },
        setSearch(context, value) {
            context.commit('setSearch', value)
        },
        async loadEgg(context, distance) {
          const response = await fetch('http://localhost:3000/graphql', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              query: `
                      {
                          eggsDistance(distance: "${distance}") {
                              distance
                              maxCp
                              minCp
                              name
                              pokemonId

                              pokemon {
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
                          }
                      }`
            })
          });
          const json = await response.json();
          const data = json.data.eggsDistance;
          context.commit('setEggs', data)
        },
    },
    modules: {
    }
})
