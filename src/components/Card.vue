<template>
  <transition name="poke-card-transition">
    <div class="poke-card">
      <div class="image-wrapper">
        <slot name="badge"></slot>
        <img class="poke-image" :src="pokemon.image" />
      </div>

      <div class="content-wrapper">
        <div class="poke-identity">
          <span class="poke-name">{{ pokemon.name }}</span>
          <span class="poke-id">#{{ parseID(pokemon.pokemonId) }}</span>
        </div>
        <div class="poke-type">
          <span>
            {{ capitalize(pokemon.primaryType) }}
          </span>
          <span>
            {{ pokemon.secondaryType ? capitalize(pokemon.secondaryType) : '' }}
          </span>
        </div>
      </div>

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
  margin: 1rem;
  width: 90%;
  height: 250px;
  border: 1px solid #f5f5f5;
  box-shadow: 0 0 5px #ddd;

  .image-wrapper {
    display: grid;
    place-items: center;
    height: 70%;
    background-color: #f5f5f5;

    .poke-image {
      width: 60px;
      height: 60px;
    }
  }

  .content-wrapper {
    display: grid;
    padding: 0.4rem;
    height: 30%;

    .poke-identity {
      position: relative;
      height: 2rem;

      .poke-name {
        position: absolute;
        left: 0;
        bottom: 20%;
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: 600;
      }

      .poke-id {
        position: absolute;
        right: 0;
        bottom: 20%;
        color: #b1b1b1;
        font-size: 0.8rem;
        font-weight: bold;
        margin-left: auto;
      }
    }
  }
}
</style>
