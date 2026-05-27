// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/sitemap'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://timeoms.fr',
    name: 'Timéo Morsilli - Portfolio',
    indexable: true
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            'c',
            'cpp',
            'python'
          ],
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          }
        }
      }
    }
  },

  routeRules: {
    '/**': {
      prerender: true
    }
  },

  features: {
    inlineStyles: false
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  image: {
    quality: 80,
    format: ['webp']
  },

  sitemap: {
    strictNuxtContentPaths: true,
    xsl: false,
    discoverImages: false
  }
})
