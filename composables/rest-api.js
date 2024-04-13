import { BASE_URL } from "~/constants/urls";
import useICookie from "./cookie";

export default class pmoAPI {
  static async getWithAccess(url) {
    try {
      // console.log("asdsad");
      console.log(BASE_URL + url);
      // console.log(useICookie.get("access_token"));
      const result = await useFetch(BASE_URL + url, {
        headers: { access_token: useICookie.get("access_token") },
      });
      // console.log(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
