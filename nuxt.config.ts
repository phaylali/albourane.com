// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/color-mode'
  ],

  devtools: { enabled: true },

  compatibilityDate: '2024-04-03',

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      templateParams: {
        siteName: 'Albourane Blog',
        separator: '|'
      },
      titleTemplate: '%s %separator %siteName',
      meta: [
        { name: 'description', content: 'A modern blog built with Nuxt 3, Tailwind CSS, and Nuxt Content.' },
        { name: 'theme-color', content: '#0d9488' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          }
        }
      }
    }
  },



  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light'
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})