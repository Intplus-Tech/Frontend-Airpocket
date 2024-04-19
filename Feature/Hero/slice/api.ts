import { User } from "@/types/type";
import { SERVER_URL } from "@/utils/api";
import handleAxiosError from "@/utils/error";
import axios from "axios";
import { setSearchResult, startSearch } from "./reducer";

function getSearchResultsApi(data: User) {
  console.log(data);
  const url = `${SERVER_URL}/flight-search?originLocationCode=SFO&destinationLocationCode=PRG&departureDate=2024-05-02&returnDate=2024-05-30&adults=1&travelClass=ECONOMY&nonStop=false&page=1&limit=10`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${authToken}`,
    },
    // data: JSON.stringify(data),
  };
  return axios(url, options);
}

export const searchFlight = async (data: User, dispatch: any) => {
  dispatch(startSearch());

  try {
    const response: any = await getSearchResultsApi(data);
    dispatch(setSearchResult(response.data));

    return { success: { ...response } };
  } catch (error) {
    const response = handleAxiosError(error);

    return { error: { response } };
  }
};

// IhSF3mhLY2l9xGDN0duCyuMXSgz0IGXr     Publie
//LDvU41Ybz9LIzEw4
