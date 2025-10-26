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
  <NuxtLayout>
    <div class="error-page">
      <h2 class="error-code">
        {{ error.statusCode }}
      </h2>
      <div class="error-container">
        <h3 class="error-message">
          {{ name }}
        </h3>
        <p class="desc">
          {{ message }}
        </p>
        <button class="link" @click="clearError({ redirect: '/' })">
          Перейти на главную
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.error-page {
  display: grid;
  height: 100%;
  padding: 100px 10px;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 1fr;

  .error-code {
    font-size: 150px;
    font-weight: 700;
    text-align: center;
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
    text-align: center;
  }

  .link {
    display: block;
    padding: 8px;
    border: 1px solid $black;
    border-radius: 8px;
    margin: 0 auto;
  }
}
</style>