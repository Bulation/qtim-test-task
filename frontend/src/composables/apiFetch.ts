/**
 * Функция обвертка для $fetch
 * @param url - api url
 * @param options - набор опций для $fetch
 */
export function apiFetch<T>(url: string, options: object = {}): Promise<T> {
  // заготовка для авторизации
  // const token = useCookie('token');
  const config = useRuntimeConfig();

  // const authorization = token.value && { Authorization: `Bearer ${token.value}` };

  const defaults = {
    baseURL: config.public.baseUrl,
  };
  const params = { ...options, ...defaults };

  return $fetch(url, params);
}