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
        modules: [
          '@kevinmarrec/nuxt-pwa'
        ],
        pwa: {
          workbox: {
            enabled: true
          }
        }
      },

    {
        server: {
            headers: (req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
                next()
            }
        }
    },
    

)