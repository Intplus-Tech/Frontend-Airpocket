import { useMutation } from "@tanstack/react-query";
import { loginAccount } from "./api";
import { User } from "@/types/type";

export const useLoginAccount = () => {
  return useMutation({
    mutationFn: (data: User) => loginAccount(data),
  });
};
