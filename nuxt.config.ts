// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: "vercel-edge",
    prerender: {
      crawlLinks: true,
      routes: ["/prerender/1", "/prerender/fetch"],
    },
  },
  routeRules: {
    "/csr/**": { ssr: false },
    "/static/**": { static: true },
    "/cache/**": {
      cache: { maxAge: 1 },
      headers: { "cache-control": "no-store" },
    },
    "/cache-swr/**": { cache: { maxAge: 1, swr: true } },
    "/swr/**": { swr: 1 * 60 },
    "/swr-long/**": { swr: 1 * 60 * 10 },
    "/swr-short/**": { swr: 1 * 3 },
    "/universal/**": {}, // default
    "/redirect/from": { redirect: { to: "redirect/to", statusCode: 302 } }, // Doesn't work: redirects to /redirect/redirect/to
    "/redirect-from": { redirect: { to: "redirect/to", statusCode: 302 } }, // works
    "/picsum/**": { proxy: { to: "https://picsum.photos/**" } }, // doesn't seem to work
  },
});
