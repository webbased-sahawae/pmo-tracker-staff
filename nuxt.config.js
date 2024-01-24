// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  generate: { fallback: true },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  target: "static",
});
