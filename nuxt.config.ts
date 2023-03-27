// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
    prerender: {
      crawlLinks: true,
      routes: ["/prerender/1", "/prerender/fetch", "/prerender/expensive"],
    },
  },
  modules: ["@pinia/nuxt"],
  routeRules: {
    "/csr/**": { ssr: false },
    "/static/**": { static: true },
    "/swr/**": { swr: 1 * 60 },
    "/swr-long/**": { swr: 10 * 60 },
    "/universal/**": {}, // default
  },
});
