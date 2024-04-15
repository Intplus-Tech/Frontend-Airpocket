import axios from "axios";
import { SERVER_URL } from "@/utils/api";
import { User } from "@/types/type";
import handleAxiosError from "@/utils/error";

function resetPasswordApi(data: User) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/change-password`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const resetPassword = async (userData: User) => {
  try {
    const loginResponse: any = await resetPasswordApi(userData);
    const { data } = loginResponse;

    if (data) {
      return { success: data };
    }
    // return null;
  } catch (error) {
    const errorResponse = handleAxiosError(error);
    return { error: errorResponse };
  }
};
