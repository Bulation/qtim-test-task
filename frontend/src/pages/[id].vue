<script setup lang="ts">
import { useArticleStore, DetailArticle } from '~/entities/article';

const route = useRoute();
const articleStore = useArticleStore();

const { error } = await useAsyncData('article', async () => {
  await articleStore.fetchDetailArticle(route.params.id as string);
  return route.params.id;
}, {
  getCachedData(key, nuxtApp) {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data || route.params.id !== data)
      return;

    return data;
  },
});

if (error.value)
  throw createError(error.value);

const title = `Статья ${articleStore.detailArticle.title}`;
const description = `Описание статьи ${articleStore.detailArticle.description}`;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <div class="container">
    <DetailArticle :article="articleStore.detailArticle" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1216px;
  padding: 120px 20px 80px;
  margin: 0 auto;

  @include md {
    padding-top: 40px;
  }
}
</style>