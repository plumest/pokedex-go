<template>
  <div>
    <slot></slot>
    <div class="container">
      <div style="height:1rem"></div>
      <div class="project-name">
        <h1>Pokédex GO</h1>
      </div>
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

  .header-container {
    margin-bottom: 3rem;
  }

  .content-container {
    position: relative;
  }
}

.project-name {
  text-align: center;
  background: wheat;
  width: 40vw;
  margin: 0 auto;
  padding: 0.5rem;
  margin-bottom: 1rem;
}
</style>
