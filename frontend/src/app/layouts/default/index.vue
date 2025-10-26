<script setup lang="ts">
import DefaultHeader from './ui/DefaultHeader.vue';
import DefaultFooter from './ui/DefaultFooter.vue';
</script>

<template>
  <div class="layout">
    <DefaultHeader />
    <main class="main">
      <slot />
    </main>
    <DefaultFooter />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  .main {
    flex-grow: 1;
  }
}
</style>