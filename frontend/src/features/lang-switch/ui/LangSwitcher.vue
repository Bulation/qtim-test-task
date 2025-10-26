<script setup>
import { onClickOutside } from '@vueuse/core';
import ukFlag from '~/app/assets/icons/uk.svg';

const languages = [
  { code: 'en', label: 'English', flag: ukFlag },
];

const currentCode = ref('en');
const currentLang = shallowRef(languages.find(l => l.code === currentCode.value) || languages[0]);
const isOpen = ref(false);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectLanguage(lang) {
  currentLang.value = lang;
  currentCode.value = lang.code;
  localStorage.setItem('lang', lang.code);
  isOpen.value = false;
}

const rootRef = useTemplateRef('rootRef');
onClickOutside(rootRef, () => isOpen.value = false);
onMounted(() => {
  const saved = localStorage.getItem('lang');
  if (saved) currentLang.value = languages.find(l => l.code === saved);
});
</script>

<template>
  <div ref="rootRef" class="language-switcher">
    <button class="current-lang" @click="toggleDropdown">
      <component :is="currentLang.flag" filled class="flag" />
    </button>

    <Transition name="fade">
      <div v-if="isOpen" class="dropdown">
        <button
          v-for="lang in languages"
          :key="lang.code"
          class="dropdown-item"
          @click="selectLanguage(lang)"
        >
          <component :is="lang.flag" filled class="flag" />
          <span>{{ lang.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.current-lang {
  display: flex;
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  border: 2px solid $black-10;
  border-radius: 50%;
  background-color: $white;
  cursor: pointer;
}

.flag {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.dropdown {
  position: absolute;
  z-index: 10;
  top: 60px;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid $black-10;
  border-radius: 10px;
  background: $white;
}

.dropdown-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
