import axios from "axios";
import { SERVER_URL } from "@/utils/api";
import { User } from "@/types/type";
import { storeItem } from "@/utils/localStorage";
import handleAxiosError from "@/utils/error";

function signupApi(data: User) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/signup`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const signupAccount = async (userData: User) => {
  //   const loginResponse: any = await loginApi(userData);
  //   return loginResponse;
  try {
    const loginResponse: any = await signupApi(userData);
    const { data } = loginResponse;

    if (data) {
      const { access_token, message, status } = data;
      storeItem("access_token", access_token);
      // storeItem("generalToken", generalToken);

      return { success: { ...data.data, message, status } };
    }
    // return null;
  } catch (error) {
    const errorResponse = handleAxiosError(error);
    return { error: errorResponse };
  }
};
