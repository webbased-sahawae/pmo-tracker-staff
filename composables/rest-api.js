import { BASE_URL } from "~/constants/urls";
import useICookie from "./cookie";
import { SYSTEM_PRIVILEGE } from "~/constants/ids";

export default class pmoAPI {
  static async getWithAccess() {
    try {
      // console.log("asdsad");
      // console.log(BASE_URL + url);
      // console.log(useICookie.get("access_token"));
      const result = await useFetch(BASE_URL + "/user/google", {
        headers: {
          access_token: useICookie.get("access_token"),
          UserLevelId: SYSTEM_PRIVILEGE,
        },
      });
      // console.log(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async login(token) {
    try {
      // console.log("asdsad");
      // console.log(BASE_URL + url);
      // console.log(useICookie.get("access_token"));
      const result = await useFetch(BASE_URL + "/user/login", {
        headers: {
          access_token: token,
          UserLevelId: SYSTEM_PRIVILEGE,
        },
      });
      // console.log(data);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async assignment() {
    try {
      // console.log("asdsad");
      // console.log(BASE_URL + url);
      // console.log(useICookie.get("access_token"));
      const result = await useFetch(BASE_URL + "/assignment/partner", {
        headers: {
          access_token: useICookie.get("access_token"),
          UserLevelId: SYSTEM_PRIVILEGE,
        },
      });
      // console.log(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
