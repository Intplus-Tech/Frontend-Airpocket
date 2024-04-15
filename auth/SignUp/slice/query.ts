import { useMutation } from "@tanstack/react-query";
import { signupAccount } from "./api";
import { User } from "@/types/type";

export const useSignupAccount = () => {
  return useMutation({
    mutationFn: (data: User) => signupAccount(data),
  });
};
