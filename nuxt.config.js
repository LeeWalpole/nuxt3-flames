// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig(
    

       {
        css: [
            'assets/css/all.css'
        ],
    },

    {
        middleware: ['cors']
    },

    {
        buildModules: [
          '@nuxtjs/pwa',
        ]
      },

      {
        modules: [
          '@nuxtjs/pwa',
        ]
      },

    {
      pwa: {
        manifest: {
          name: 'ThaiFlames App',
          lang: 'en',
          useWebmanifestExtension: false
        }
      }
    },

    {
        head: {
          link: [
            { rel: 'manifest', href: '/manifest.json' }
          ]
        }
      },

    {
        server: {
            headers: (req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
                next()
            }
        }
    }
    

)