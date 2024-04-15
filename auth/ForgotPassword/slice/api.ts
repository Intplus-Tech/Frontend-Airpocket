import axios from "axios";
import { SERVER_URL } from "@/utils/api";
import { User } from "@/types/type";
import handleAxiosError from "@/utils/error";

function forgotPasswordApi(data: User) {
  //user: { email: string; password: string }
  const url = `${SERVER_URL}/forgot-password`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const forgotPassword = async (userData: User) => {
  try {
    const loginResponse: any = await forgotPasswordApi(userData);
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
