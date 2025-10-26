import { apiGetArticle, apiGetArticles } from '../api';
import { ARTICLES_LIMIT } from './constants';
import type { Article } from './types';

interface ArticleStoreState {
  articles: Article[],
  paginatedArticles: Article[],
  detailArticle: Article,
}

export const useArticleStore = defineStore('articleStore', {
  state: (): ArticleStoreState => ({
    articles: [],
    paginatedArticles: [],
    detailArticle: {} as Article,
  }),
  actions: {
    async fetchDetailArticle(id: string) {
      if (this.detailArticle.id === id) return;

      try {
        const data = await apiGetArticle(id);

        if (data && Object.keys(data).length)
          this.detailArticle = data;
        else
          throw createError({
            statusCode: 404,
            statusMessage: 'Не удалось найти страницу статьи',
          });

      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (e: any) {
        console.error('fetchDetailArticleProduct', e);

        if (e && e.statusCode)
          throw e;

        throw createError({
          statusCode: 500,
          statusMessage: 'Ошибка при получении статьи',
          cause: e,
        });
      }
    },
    async fetchArticles(page: number) {
      if (this.articles.length) {
        this.changeArticlesPage(page);
        return;
      }

      try {
        const data = await apiGetArticles();
        if (data) {
          this.articles = data;
          this.changeArticlesPage(page);
        } else
          throw createError({
            statusCode: 404,
            statusMessage: 'Не удалось найти статьи',
          });

      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (e: any) {
        console.error('fetchArticles', e);
        if (e && e.statusCode)
          throw e;

        throw createError({
          statusCode: 500,
          statusMessage: 'Ошибка при получении статей',
          cause: e,
        });
      }
    },
    changeArticlesPage(page: number) {
      if (this.articles.length)
        this.paginatedArticles = this.articles.slice(ARTICLES_LIMIT * (page - 1), ARTICLES_LIMIT * page);
      else
        this.fetchArticles(page);
    },
  },
});