import type { Article } from '../model/types';

export const apiGetArticles = () => apiFetch<Article[]>('/qtim-test-work/posts/');

export const apiGetArticle = (id: string) => apiFetch<Article>(`/qtim-test-work/posts/${id}`);
