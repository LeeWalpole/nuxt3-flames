// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig(
    

       {
        css: [
            'assets/css/all.css'
        ],
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
        headers: (req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            next()
        }
    }
}
    

)