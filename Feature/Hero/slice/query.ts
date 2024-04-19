import { User } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import { searchFlight } from "./api";

export const useSearchFlight = (searchaParams: User) => {
  return useQuery({
    queryKey: ["getSearchResults"],
    queryFn: (searchaParams: User) => searchFlight(searchaParams),
  });
};
