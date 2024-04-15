import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "./api";
import { User } from "@/types/type";

export const useResetPassword = () => {
  return useMutation({
    mutationFn: (data: User) => resetPassword(data),
  });
};
