// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@nuxtjs/sitemap"],
  compatibilityDate: "2024-11-23",
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  sitemap: {
    hostname: "https://undercloud.pro",
    gzip: true,
    exclude: [], // routes to exclude here
    routes: ["/", "/about", "/pricing", "/contact"],
  },
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "https://undercloud.pro/sitemap.xml",
  },
});
