import cesium from 'vite-plugin-cesium';

export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/device',
    '@ant-design-vue/nuxt',
    '@vueuse/nuxt',
    '@element-plus/nuxt',
    "@prisma/nuxt"
  ],
  vite:{
    plugins:[cesium()]
  },
  prisma:{
    runMigration:false
  },
})
