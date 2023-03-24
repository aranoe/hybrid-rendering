// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/csr": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: 500000000 },
    "/universal": {}, // default
  },
});
