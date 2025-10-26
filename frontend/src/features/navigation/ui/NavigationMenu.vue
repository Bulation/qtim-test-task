<script setup lang="ts">
import { NAVIGATION_LINKS } from '../model/constants';

const emit = defineEmits(['close']);
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li v-for="(link, i) in NAVIGATION_LINKS" :key="`nav-${i}`">
        <NuxtLink :to="link.to" class="link" @click="emit('close')">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  gap: 58px;

  @include md {
    flex-direction: column;
    gap: 16px;
  }
}

.link {
  padding: 5px;
  color: $black;
  font-size: 20px;
  font-weight: 400;
  line-height: 100%;
  transition: color 0.3s;

  &:hover {
    color: $blue;
  }
}
</style>