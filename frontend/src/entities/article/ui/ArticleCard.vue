<script setup lang="ts">
import type { Article } from '../model/types';

interface ArticleCardProps {
  article: Article,
}
defineProps<ArticleCardProps>();
</script>

<template>
  <article class="article" itemscope itemtype="https://schema.org/Article">
    <NuxtLink :to="`/${article.id}`" itemprop="url">
      <div class="image-wrapper">
        <NuxtImg
          :src="article.image"
          :alt="`Изображение статьи ${article.title}`"
          sizes="280px"
          itemprop="image"
          class="img"
          placeholder="/placeholder.svg"
        />
      </div>
      <p class="text" itemprop="description">
        {{ article.preview }}
      </p>
      <div class="read-more">
        Read more
      </div>
    </NuxtLink>
  </article>
</template>

<style lang="scss" scoped>
.article {
  font-size: 20px;
  line-height: 120%;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-20px);

    .read-more {
      opacity: 1;
    }
  }

  .image-wrapper {
    display: flex;
    width: 280px;
    height: 280px;
    margin-bottom: 24px;

    .img {
      width: 100%;
      object-fit: cover;
    }
  }

  .text {
    color: $black;
  }

  .read-more {
    margin-top: 12px;
    color: $purple;
    opacity: 0;
  }
}
</style>