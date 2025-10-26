<script setup lang="ts">
import { ARTICLES_LIMIT, useArticleStore } from '~/entities/article';

const articleStore = useArticleStore();
const route = useRoute();

const currentPage = computed(() => Number(route.query.page) || 1);
const lastPage = computed(() => Math.ceil(articleStore.articles.length / ARTICLES_LIMIT));
const showPagination = computed(() => lastPage.value !== 1);

const onChange = async (page: number) => {
  articleStore.changeArticlesPage(page);
  await navigateTo({
    query: {
      ...route.query,
      page,
    },
  });
};
</script>

<template>
  <BasePagination
    v-if="showPagination"
    :current-page
    :last-page
    @change="onChange"
  />
</template>