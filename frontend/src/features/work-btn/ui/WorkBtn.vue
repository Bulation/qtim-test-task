<script setup lang="ts">
const emit = defineEmits(['close']);
</script>

<template>
  <NuxtLink to="#" class="work-btn" @click="emit('close')">
    Let’s work
  </NuxtLink>
</template>

<style lang="scss" scoped>
.work-btn {
  padding: 16px 32px;
  border-radius: 999px;
  background-color: $black;
  color: $white;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  transition: color, background-color 0.3s;

  &:hover {
    background-color: $black-secondary;
  }
}
</style>