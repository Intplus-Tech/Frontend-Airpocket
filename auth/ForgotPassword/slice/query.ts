import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "./api";
import { User } from "@/types/type";

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: (data: User) => forgotPassword(data),
  });
};
