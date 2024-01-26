// https://nuxt.com/docs/api/configuration/nuxt-config
import routes from "./data/routes.json";

export default defineNuxtConfig({
  generate: {
    fallback: true,
    // routes
  },

  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
