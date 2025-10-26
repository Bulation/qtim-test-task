<script setup lang="ts">
import { FOOTER_LINKS } from '../model/constants';

const firstPart = FOOTER_LINKS.slice(0, FOOTER_LINKS.length / 2);
const secondPart = FOOTER_LINKS.slice(FOOTER_LINKS.length / 2);
</script>

<template>
  <div class="links-container">
    <ul class="links-list">
      <li v-for="(link, i) in firstPart" :key="`footer-link-${i}`">
        <NuxtLink :to="link.to" class="link">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
    <button class="link-cta">
      <span>Go</span>
    </button>
    <ul class="links-list">
      <li v-for="(link, i) in secondPart" :key="`footer-link-second-${i}`">
        <NuxtLink :to="link.to" class="link">
          {{ link.label }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.links-container {
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: space-between;

  @include lg {
    height: auto;
    flex-direction: column;
    margin-top: 45px;
    gap: 15px;
  }

  .links-list {
    display: flex;
    gap: 32px;

    .link {
      padding: 5px;
      color: $black;
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      text-decoration: underline;
      transition: color 0.3s;
      white-space: nowrap;

      &:hover {
        color: $blue;
      }
    }

    @include md {
      gap: 16px;
    }
  }

  .link-cta {
    display: flex;
    width: 358px;
    height: 358px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: $black;
    color: $gray-2;
    cursor: pointer;
    font-size: 32px;
    line-height: 100%;
    transition: background 0.3s;

    &:hover {
      background-color: $blue;
    }

    @include lg {
      display: none;
    }
  }
}
</style>