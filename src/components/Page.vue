<template>
  <div>
    <div class="poke-nav">
      <div class="nav-brand">
        <router-link class="nav-btn" to="/">
          <p class="nav-logo">Pokédex GO</p>
        </router-link>
      </div>

      <div class="nav-items">
        <router-link class="nav-btn" to="/pokemons/ranking">
          <p class="nav-item">Tier List</p>
        </router-link>

        <router-link class="nav-btn" to="/">
          <p class="nav-item">Pokemon</p>
        </router-link>

        <router-link class="nav-btn" to="/eggs">
          <p class="nav-item">Egg</p>
        </router-link>
      </div>
    </div>

    <div class="container">
      <div class="poke-container">

        <div class="header-container">
          <slot name="section-header"></slot>
        </div>

        <div class="content-container">
          <slot name="section-content"></slot>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.background-1-load{
  height: 100vh;
}

.poke-container-load{
  height: 90vh;
}

.poke-container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  height: 80%;

  .content-container {
    position: relative;
  }
}

.poke-nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  color: #ffffff;
  background-color: #153e90;
  font-weight: bold;
  width: 100vw;
  height: 40px;
  line-height: 40px;
  margin-bottom: 1rem;
  z-index: 1000;

  .nav-brand, .nav-items {
    width: 50%;

    p {
      margin-bottom: 0;
    }

    .nav-logo {
      margin-left: 2rem;
      font-size: 1.4rem;
      letter-spacing: 1px;
    }

    .nav-item {
      width: fit-content;
      margin-left: auto;
      margin-right: 1rem;
    }
  }

  .nav-items {
    display: flex;
    justify-content: flex-end;
  }
}

.nav-btn {
  color: #ffffff;
  text-decoration: none;
  margin: 0;
  padding: 0;
}
</style>
