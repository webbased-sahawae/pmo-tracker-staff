export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();
  //   console.log(localStorage.getData("access_token"));
  //   await nuxtStorage.localStorage.setData("access_token", 2);
  //   const priv = await nuxtStorage.localStorage.getData("access_token");
  //   // The condition will be execute twice (server and client) therefore use process.client to execute in client side only, localstorage as well only available in client side
  //   console.log(priv != 1 && process.client);
  // if (process.server) return;
  // console.log(!trace.value.PartnerId);
  // if ((to.name = "program-PartnerId"))
  if (process.client) {
    const { trace } = useTrace();
    if (to.name == "project-add") {
      if (!trace?.value?.PartnerId) return navigateTo("/program/");
    }
    if (to.name == "program-add") {
      if (!trace?.value?.PartnerId) return navigateTo("/program/");
    }
  }
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return;
});
