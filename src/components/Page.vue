<template>
  <div class="background-1">
    <div class="container">
      <div style="height:1rem"></div>
      <div class="project-name">
        <h1>PMK Pokemon wiki</h1>
      </div>
      <div class="background-2">
        <div class="topic-header">
          <slot name="section-header"></slot>
        </div>
        <div class="content">
          <slot name="section-content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-1 {
  background-color: #fcaa67;
  background-image: url('../assets/pokeball.png');
}
.background-2 {
  background-color: #ffffc7;
  padding: 1rem;
  .topic-header{
    text-decoration: underline;
  }
}

.project-name {
  text-align: center;
  background: wheat;
  width: 40vw;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
