// https://nuxt.com/docs/api/configuration/nuxt-config
// import routes from "./data/routes.json";

export default defineNuxtConfig({
  modules: ["nuxt-vue3-google-signin"],
  googleSignIn: {
    clientId:
      "643210795718-odgaolru40pcotuainctvues1kakfm1g.apps.googleusercontent.com",
  },
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
