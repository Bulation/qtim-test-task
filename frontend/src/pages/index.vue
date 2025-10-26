<script setup lang="ts">
import { ArticleCard, useArticleStore } from '~/entities/article';
import { ArticlesPagination } from '~/features/article';

const articleStore = useArticleStore();

const route = useRoute();

const { status, error } = await useAsyncData(async () => {
  const page = Number(route.query.page) || 1;
  await articleStore.fetchArticles(page);
  return articleStore.paginatedArticles;
});

if (error.value)
  throw createError(error.value);

useSeoMeta({
  title: 'Статьи',
  description: 'Описание статей.',
  ogTitle: 'Статьи',
  ogDescription: 'Описание статей.',
});
</script>

<template>
  <section>
    <div class="container">
      <BaseHeading class="title">
        Articles
      </BaseHeading>
      <div v-if="status !== 'pending'">
        <ul class="articles-list">
          <li v-for="article in articleStore.paginatedArticles" :key="article.id">
            <ArticleCard :article />
          </li>
        </ul>
        <ArticlesPagination />
      </div>
      <div v-else>
        <BaseLoader />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1216px;
  padding: 120px 10px 140px;
  margin: 0 auto;

  @include md {
    padding-top: 40px;
  }

  .title {
    margin-bottom: 60px;
    color: $black;
  }

  .articles-list {
    display: grid;
    margin-bottom: 50px;
    gap: 40px 32px;
    grid-template-columns: repeat(4, 1fr);

    @include xl {
      grid-template-columns: repeat(3, 1fr);
    }

    @include lg {
      grid-template-columns: repeat(2, 1fr);
    }

    @include md {
      grid-template-columns: 1fr;
    }
  }
}
</style>