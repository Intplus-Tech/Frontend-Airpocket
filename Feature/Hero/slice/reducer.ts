import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchResult {
  id: number;
  // Add other properties as needed
}

interface SearchState {
  query: string;
  result: SearchResult[] | null;
  isLoading: boolean;
}

const initialState: SearchState = {
  query: "",
  result: null,
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    startSearch: (state) => {
      state.isLoading = false;
    },
    setSearchResult(state, action: PayloadAction<any>) {
      state.result = action.payload;
      console.log(state.result, "redux");
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchResult, startSearch, setIsLoading } =
  searchSlice.actions;
export default searchSlice.reducer;
