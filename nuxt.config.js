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
        head: {
          link: [
            { rel: 'manifest', href: '/manifest.json' }
          ]
        }
      },

    {
        server: {
            headers: {
                'Access-Control-Allow-Origin': 'https://heroic-conkies-a5985e.netlify.app'
            }
        }
    }
    

)