// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: "~/components/main",
        pathPrefix: false,
        global: true,
      },
      // {
      //   path: "~/components",
      //   pathPrefix: false,
      //   global: true,
      // },
    ],
  },  
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})