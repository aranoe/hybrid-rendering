// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
  },
  modules: ["@pinia/nuxt"],
  routeRules: {
    "/csr": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: 1 * 60 },
    "/universal": {}, // default
  },
});
