<template>
  <transition name="poke-card-transition">
    <div class="poke-card">
      <div><img :src="pokemon.image" /></div>
      <div class="pokename">{{ pokemon.name }}</div>
      <div>#{{ parseID(pokemon.pokemonId) }}</div>
      <div class="pokeType">
        <span>
          {{ capitalize(pokemon.primaryType) }}
        </span>
        <span>
          {{ pokemon.secondaryType ? capitalize(pokemon.secondaryType) : '' }}
        </span>
      </div>
      <div class="pokeinfo">hp = {{ pokemon.hp }}</div>
      <div class="pokeinfo">atk = {{ pokemon.attack }}</div>
      <div class="pokeinfo">defense = {{ pokemon.defense }}</div>
      <div class="pokeinfo">cp = {{ pokemon.cp }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Card",
  props: {
    pokemon: Object
  },
  methods: {
    capitalize(text) {
      return text[0].toUpperCase() + text.slice(1).toLowerCase()
    },
    parseID(id) {
      let text = '00' + id
      return text.slice(text.length - 3)
    }
  },
}
</script>

<style lang="scss" scoped>
.poke-card-transition-leave-active {
  .poke-card {
    padding: 0;
    margin: 0;
  }
}

.poke-card {
  background-color: #ffffff;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;

  .pokename {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
</style>
