<script setup lang="ts">
interface PaginationProps {
  currentPage: number,
  lastPage: number,
}
const { currentPage, lastPage } = defineProps<PaginationProps>();
type PaginationEmits = (e: 'change', page: number) => void;
const emit = defineEmits<PaginationEmits>();

const paginationList = computed(() => {
  if ((lastPage - currentPage <= 2 && lastPage <= 4) ||
    (currentPage === 3 && lastPage === 5))
    return Array.from({ length: lastPage }, (_, i) => i + 1); // массив от 1 до lastPage

  if (currentPage === lastPage)
    return [1, '...', currentPage - 2, currentPage - 1, currentPage]; // массив [1, ..., 5, 6, 7], если текущая страница 7

  const leftEllipses = currentPage >= 4;
  const rightEllipses = lastPage - currentPage > 2;
  if (leftEllipses && rightEllipses)
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', lastPage]; // массив [1, ..., 4,5,6, ..., 10] если текущая страница 5

  if (leftEllipses)
    return [...new Set([1, '...', currentPage - 1, currentPage, currentPage + 1, lastPage])]; // массив [1, ..., 3, 4, 5, 6] если текущая страница 4

  return [...new Set([1, currentPage - 1, currentPage, currentPage + 1, '...', lastPage]
    .filter(page => page !== 0))]; // массив [1, 2, 3, 4, ..., 10] если текущая страница 3
});

const handleClick = (page: string | number) => {
  if (page !== currentPage) { // предотвращаем загрузку данных, если кликаем по текущей странице
    window.scrollTo(0, 0);
    emit('change', Number(page));
  }
};
</script>
<template>
  <div class="pagination">
    <button v-if="currentPage !== 1" class="prev-btn" @click="handleClick(currentPage - 1)">
      <i-arrow-right filled class="icon" />
    </button>
    <ol class="pagination-list">
      <li v-for="page in paginationList" :key="page" class="page-item">
        <div v-if="page === '...'" class="text">
          {{ page }}
        </div>
        <button v-else :class="['btn', 'text', { 'active': page === currentPage }]" @click="handleClick(page)">
          {{ page }}
        </button>
      </li>
    </ol>
    <button v-if="currentPage !== lastPage" class="next-btn" @click="handleClick(currentPage + 1)">
      <i-arrow-right filled class="icon" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 8px;

  @include md {
    gap: 5px;
  }

  .pagination-list {
    display: flex;
    gap: 8px;

    @include md {
      gap: 5px;
    }

    .text {
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
      color: $black;
      font-size: 16px;
      line-height: 50%;
    }

    .btn {
      padding: 18px 17px;
      border-radius: 12px;
      background-color: $gray-2;
      text-align: center;
      transition: background 0.3s;

      &:not(&.active):hover {
        background-color: $gray-3;
      }

      @include md {
        padding: 12px;
      }
    }

    .active {
      background-color: $black;
      color: $white;
    }
  }

  .prev-btn {
    transform: rotate(180deg);
  }

  .prev-btn,
  .next-btn {
    display: flex;
    width: 44px;
    align-items: center;
    justify-content: center;
    border: 1px solid $gray-3;
    border-radius: 12px;
    transition: border, background 0.3s;

    &:hover {
      border: none;
      background-color: $gray-3;
    }

    @include md {
      width: 33px;
    }

    .icon {
      font-size: 24px;
    }
  }
}
</style>
