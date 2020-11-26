import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// const url = 'http://localhost:8080/'

export default new Vuex.Store({
    state: {
        pokemons: []
    },
    mutations: {
        setData(state, data) {
            state.pokemons = data
        }
    },
    actions: {
        async loadData(context) {
            const resp = await fetch('http://localhost:3000/graphql', {
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
            const json = await resp.json();
            const data = json.data.pokemons;
            context.commit('setData', data)
        },
    },
    modules: {
    }
})
