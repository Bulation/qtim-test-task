<script setup lang="ts">
interface BaseHeadingProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  styleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | '',
  html?: string,
}

withDefaults(defineProps<BaseHeadingProps>(), {
  level: 'h1',
  styleLevel: '',
  html: '',
});
</script>

<template>
  <component
    :is="level"
    v-if="html"
    :class="`heading heading--${styleLevel || level}`"
    :inner-h-t-m-l="html"
  />
  <component :is="level" v-else :class="`heading heading--${styleLevel || level}`">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.heading {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1;

  &--h1 {
    font-size: 84px;

    @include md {
      font-size: 26px;
      line-height: 1.2;
    }
  }
}
</style>
