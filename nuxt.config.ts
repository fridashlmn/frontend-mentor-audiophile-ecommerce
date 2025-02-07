import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint'],

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    srcDir: '/app',
    static: true,
    preset: 'netlify-static',
  },

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',
})
