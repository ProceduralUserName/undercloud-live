// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  // app: {
  //   head: {
  //     link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  //     title: "UnderCloud",
  //   },
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-icon"],
  compatibilityDate: "2024-11-23",
});
