export default {
  quality: 80,
  format: ['webp'],
  provider: 'ipx',
  screens: {
    'xs': 425,
    'md': 768,
    '2xl': 1400,
  },
  domains: [process.env.NUXT_IMAGE_BASE_DOMAIN as string],
  ipx: {
    maxAge: 31536000,
  },
};