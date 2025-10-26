<script setup lang="ts">
import type { Article } from '../model/types';

interface ArticleCardProps {
  article: Article,
}
defineProps<ArticleCardProps>();
</script>

<template>
  <section itemscope itemtype="https://schema.org/Article">
    <BaseHeading class="title" itemprop="headline">
      {{ article.title }}
    </BaseHeading>
    <NuxtImg
      :src="article.image"
      :alt="`Изображение статьи ${article.title}`"
      sizes="280px"
      itemprop="image"
      class="img"
      placeholder="/placeholder.svg"
    />
    <p class="about">
      About
    </p>
    <p class="text" itemprop="articleBody">
      {{ article.description }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.title {
  margin-bottom: 73px;

  @include md {
    margin-bottom: 20px;
  }
}

.img {
  width: 100%;
  max-height: 700px;
  margin-bottom: 80px;
  object-fit: contain;

  @include md {
    margin-bottom: 25px;
  }
}

.about {
  margin-bottom: 32px;
  color: $black;
  font-size: 16px;
  line-height: 100%;
}

.text {
  color: $black;
  font-size: 36px;
  line-height: 124%;

  @include md {
    font-size: 18px;
  }
}
</style>