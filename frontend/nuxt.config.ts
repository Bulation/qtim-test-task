import fontsConfig from './src/app/nuxt-config/fonts';
import imagesConfig from './src/app/nuxt-config/image';
import svgoConfig from './src/app/nuxt-config/svgo';
import eslintConfig from './src/app/nuxt-config/eslint';
import stylelintConfig from './src/app/nuxt-config/stylelint';
import breakpointConfig from './src/app/nuxt-config/breakpoint';

export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
    ['@nuxt/fonts', fontsConfig],
    ['@nuxt/image', imagesConfig],
    ['nuxt-svgo', svgoConfig],
    ['@nuxt/eslint', eslintConfig],
    ['@nuxtjs/stylelint-module', stylelintConfig],
    ['nuxt-viewport', breakpointConfig],
  ],

  compatibilityDate: '2025-10-25',

  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  components: [
    {
      path: '~/shared/ui',
      pathPrefix: false,
    },
  ],

  app: {
    head: {
      title: 'QTIM',
      htmlAttrs: { lang: 'ru' },
      bodyAttrs: {
        'data-itemscope': '',
        'data-itemtype': 'https://schema.org/WebPage',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
        { name: 'description', content: 'description' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'QTIM Test task' },
      ],
    },
  },

  css: ['normalize.css/normalize.css', '@/app/assets/styles/scss/global.scss'],

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },

  dir: {
    public: 'app/public',
    layouts: 'app/layouts',
    assets: 'app/assets',
  },
  srcDir: 'src/',

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'append',
      },
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/app/assets/styles/scss/_colors.scss" as *;
            @use "@/app/assets/styles/scss/_mixins.scss" as *;
          `,
        },
      },
    },
  },

  typescript: {
    typeCheck: true,
  },
});