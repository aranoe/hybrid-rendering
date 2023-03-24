// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
    prerender: {
      crawlLinks: true,
      routes: ["/prerender/1"],
    },
  },
  modules: ["@pinia/nuxt"],
  routeRules: {
    "/csr": { ssr: false },
    "/static": { static: true },
    "/static-render/**": { static: true },
    "/swr": { swr: 1 * 60 },
    "/universal": {}, // default
  },
});
