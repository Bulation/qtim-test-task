<script setup lang="ts">
interface BaseLoaderProps {
  size?: number,
  container?: boolean,
}

const { container = false, size = 30 } = defineProps<BaseLoaderProps>();
const classNames = container ? 'loading-container' : 'loading';
</script>

<template>
  <div :class="classNames">
    <div class="lds-ring" :style="{ width: `${size}px`, height: `${size}px` }">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-container {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
}

.loading {
  display: flex;
  justify-content: center;
}

.lds-ring {
  position: relative;
  display: inline-block;

  div {
    position: absolute;
    display: block;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
    border: 3px solid;
    border-color: $black transparent transparent;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &:nth-child(1) {
      animation-delay: -0.45s;
    }

    &:nth-child(2) {
      animation-delay: -0.3s;
    }

    &:nth-child(3) {
      animation-delay: -0.15s;
    }
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
