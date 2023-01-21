export default defineNuxtConfig({
    css: [
        'assets/css/all.css'
    ],
    build: {
        outputDir: 'build',
    },
    generate: {
        dir: 'generated'
    },
})