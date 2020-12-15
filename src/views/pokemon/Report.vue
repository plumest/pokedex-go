<template>
  <Page>
    <template v-slot:section-header v-if="!isLoading">
      <div class="container">
        <div class="d-flex align-items-center">
          <router-link class="back-button" to="/">
            <i class="fas fa-caret-square-left"></i>
          </router-link>
          <h2 class="ml-2">Pokemon report</h2>
        </div>
      </div> </template
    >
  </Page>
</template>

<script>
import Page from '@/components/Page.vue';
export default {
  components: {
    Page,
  },
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap';

.back-button {
  font-size: $font-size-lg;
}

</style>
