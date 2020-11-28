<template>
  <div id="app">
    <Loading v-if="isLoading"/>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import PokeList from "@/views/PokeList";
import Loading from "@/components/Loading";

export default {
  name: 'App',
  components: {
    // PokeList,
    Loading
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading
    }
  },
  async mounted() {
    this.$store.dispatch('setLoading', true)
    await this.$store.dispatch('loadData')
    this.$store.dispatch('setLoading', false)
  },
}
</script>

<style lang="scss">
@import './src/assets/scss/app.scss';

#app {

}

body {
  background-color: #333333;
  color: #333333;
}
.stop-scrolling {
  height: 100%;
  overflow: hidden;
}
</style>
