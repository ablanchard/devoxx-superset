// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,  app: {
    head: {
      title: 'MISSION CONTROL'
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon', 'nuxt-simple-sitemap'],
  runtimeConfig: {
    public: {
      axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: process.env.BACKEND_HOST,
      },
      superset: {
        host: process.env.SUPERSET_HOST,
      },
    }

  },
})
