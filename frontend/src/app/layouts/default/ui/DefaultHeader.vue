<script setup lang="ts">
import { NavigationMenu } from '~/features/navigation';
import { LangSwitcher } from '~/features/lang-switch';
import { BurgerMenu } from '~/widgets/navigation';
import { WorkBtn } from '~/features/work-btn';

const route = useRoute();
const logoComponent = computed(() => route.path === '/' ? 'div' : 'a');
const isLink = computed(() => route.path === '/' ? undefined : '/');
const viewport = useViewport();
</script>

<template>
  <header class="header">
    <div class="container">
      <component :is="logoComponent" :href="isLink">
        <NuxtImg src="/logo.svg" alt="Логотип QTIM" class="img" />
      </component>
      <div class="right-side">
        <NavigationMenu v-if="viewport.isGreaterThan('sm')" />
        <div v-if="viewport.isGreaterThan('sm')" class="buttons">
          <LangSwitcher />
          <WorkBtn />
        </div>
        <BurgerMenu v-if="!viewport.isGreaterThan('sm')" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  max-width: 1440px;
  align-items: center;
  justify-content: space-between;
  padding: 35px 40px;
  margin: 0 auto;

  .img {
    width: 84px;
    height: 25px;
  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 91px;

    .buttons {
      display: flex;
      gap: 16px;
    }
  }
}
</style>