// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@pinia/nuxt'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
    app: {
        head: {
            script: [{ src: "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js" }]
        }
    },
    ssr: false,
    imports: {
        dirs: ['./stores'],
    },
    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
})
