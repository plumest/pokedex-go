<template>
  <div class="loading">
    <div class="loading-background"/>
    <img class="loading-logo" src="../assets/pokeball.png" alt="loading...">
  </div>
</template>

<script>
export default {
name: "Loading"
}
</script>

<style scoped>
  @keyframes shake {
    0% {
      transform: rotateZ(5deg);
    }
    10% {
      transform: rotateZ(-10deg);
    }
    20% {
      transform: rotateZ(8deg);
    }
    40% {
      transform: rotateZ(-6deg);
    }
    60% {
      transform: rotateZ(5deg);
    }
    90% {
      transform: rotateZ(-4deg);
    }
    100% {
      transform: rotateZ(2deg);
    }
  }

  .loading {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }

  .loading-background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.3;
    z-index: 1001;
  }

  .loading-logo {
    animation-name: shake;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    /*animation-timing-function: ease-out;*/
    z-index: 1002;
  }
</style>