import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const url = 'http://localhost:8080/'

export default new Vuex.Store({
    state: {
        pokemons: [],
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
        }
    },
    modules: {
    }
})
