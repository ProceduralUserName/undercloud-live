// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-icon", "@nuxtjs/robots", "@nuxtjs/sitemap"],
  compatibilityDate: "2024-11-23",
  app: {
    head: {
      title: "Undercloud - Affordable Websites for Small Businesses",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Undercloud specializes in affordable, high-quality websites tailored for small businesses to attract and convert customers.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://undercloud.pro/og_image.png",
        },
      ],
    },
  },

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
