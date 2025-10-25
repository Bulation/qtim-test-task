<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps<{
  error: NuxtError,
}>();
const name = error.statusCode === 404 ? 'Страница не найдена' : 'Ошибка сервера';
const message = error.statusMessage ? error.statusMessage : 'Что-то пошло не так. Попробуйте начать с главной страницы';
useSeoMeta({
  title: 'Страница не найдена',
  description: 'Ошибка 404 — страница не существует. Вернитесь на главную или воспользуйтесь поиском.',
  ogTitle: 'Страница не найдена',
  ogDescription: 'Ошибка 404 — страница не существует. Вернитесь на главную или воспользуйтесь поиском.',
  robots: {
    noindex: true,
  },
});
</script>

<template>
  <div class="error-page">
    <div class="status-code-wrap">
      <h2 class="error-code">
        {{ error.statusCode }}
      </h2>
    </div>
    <div class="app-container error-container">
      <h3 class="error-message">
        {{ name }}
      </h3>
      <p class="desc">{{ message }}</p>
      <button @click="clearError({ redirect: '/' })" class="default-button link">
        Перейти на главную
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 1fr;

  .status-code-wrap {
    position: relative;
    margin-bottom: 50px;
  }

  .error-code {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 220px;
    font-weight: 700;
    transform: translate(-50%, -50%);
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error-message {
    margin-bottom: 6px;
    font-size: 32px;
    font-weight: 800;
    line-height: 45px;
  }

  .desc {
    margin-bottom: 21px;
    font-size: 14px;
    font-weight: 400;
  }

  .link {
    display: block;
    margin: 0 auto;
  }
}
</style>