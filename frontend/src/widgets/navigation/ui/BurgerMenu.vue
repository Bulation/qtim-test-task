<script setup lang="ts">
import { NavigationMenu } from '~/features/navigation';
import { LangSwitcher } from '~/features/lang-switch';
import { WorkBtn } from '~/features/work-btn';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

watch(isOpen, (value) => {
  document.body.classList.toggle('no-scroll', value);
});

onUnmounted(() => {
  document.body.classList.remove('no-scroll');
});
</script>

<template>
  <div class="burger-menu">
    <button
      class="burger-btn"
      :class="{ active: isOpen }"
      aria-label="Toggle menu"
      @click="toggleMenu"
    >
      <span />
      <span />
      <span />
    </button>

    <Transition name="fade">
      <div v-if="isOpen" class="overlay" @click="toggleMenu" />
    </Transition>

    <Transition name="slide">
      <div v-if="isOpen" class="mobile-menu">
        <NavigationMenu @close="toggleMenu" />
        <div class="menu-buttons">
          <LangSwitcher />
          <WorkBtn @close="toggleMenu" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.burger-menu {
  position: relative;
  z-index: 100;
}

.burger-btn {
  position: relative;
  z-index: 200;
  display: flex;
  width: 28px;
  height: 20px;
  flex-direction: column;
  justify-content: space-between;
  border: none;
  background: none;
  cursor: pointer;
}

.burger-btn span {
  display: block;
  height: 2px;
  border-radius: 2px;
  background: $black;
  transition: all 0.3s ease;
}

.burger-btn.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 6px);
}

.burger-btn.active span:nth-child(2) {
  opacity: 0;
}

.burger-btn.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

.overlay {
  position: fixed;
  z-index: 150;
  background: $black-secondary;
  inset: 0;
}

.mobile-menu {
  position: fixed;
  z-index: 160;
  top: 0;
  right: 0;
  display: flex;
  width: 280px;
  height: 100%;
  flex-direction: column;
  padding: 80px 24px 24px;
  background: $white;
  gap: 24px;
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
