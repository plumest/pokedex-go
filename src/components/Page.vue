<template>
  <div>
    <div class="poke-nav">
      <h1>Pokédex GO</h1>
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
  color: #ffffff;
  background-color: #153e90;
  font-weight: bold;
  width: 100vw;
  height: 60px;
  line-height: 60px;
  position: fixed;
  z-index: 1000;
}
</style>
