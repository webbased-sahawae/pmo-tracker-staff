import useICookie from "~/composables/cookie";
import pmoAPI from "~/composables/rest-api";
import { BASE_URL } from "~/constants/urls";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const nuxtApp = useNuxtApp();

  // if (!useICookie.get("access_token")) {
  //   console.log("no token");
  // }
  // if (useICookie.get("access_token")) {
  //   console.log(useICookie.get("access_token"));
  // }
  if (process.client) {
    if (to.name != "login") {
      try {
        const { data, error } = await pmoAPI.getWithAccess("/user/google");
        // console.log(useICookie.get("access_token"));
        if (error.value) throw error.value;
      } catch (error) {
        useICookie.delete("access_token");
        return navigateTo("/login");
      }
    }
    // if (
    //   to.name == "project-add" ||
    //   to.name == "program-add" ||
    //   to.name == "project-ProjectId" ||
    //   to.name == "activity-add"
    // ) {
    //   console.log(!trace.value.PartnerId);
    //   if (!useTrace().trace.value?.PartnerId) return navigateTo("/");
    // }
    if (from.name == "project-ProjectId" && to.name !== "activity-add") {
      delete useTrace().trace.value.ProjectId;
    }
    // if (to.name == "index")
    //   return navigateTo("/program/8ca69da3-4f05-4768-8748-89a04a536aed");
  }
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered)
    return;
});
