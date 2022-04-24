import { ActionTypes } from "@mui/base";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { access, stat } from "fs";

export const initialState = {
  Country: "",
  Category: "",
  Sources: "",
  SortBy: "",
  Dates: "", //from - to? ["Date" , "Date"]
  Language: "",
  Endpoint: "Top Headlines",
  countryName: "",
  valueInSearch: "",
  searchIsFocused: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setEndpoint(state, action: PayloadAction<string>) {
        return { ...initialState, Endpoint: action.payload };
    },
    setCountry(state, action: PayloadAction<string>) {
      state.Country = action.payload;
      state.Sources = "";
    },
    setCategory(state, action: PayloadAction<string>) {
      state.Category = action.payload;
      state.Sources = "";
    },
    setSources(state, action: PayloadAction<string>) {
      state.Sources = action.payload;
      state.Country = "";
      state.Category = "";
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.SortBy = action.payload;
    },
    setDates(state, action: PayloadAction<string>) {
      state.Dates = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.Language = action.payload;
    },
    setCountryName(state, action: PayloadAction<string>) {
      state.countryName = action.payload;
    },
    setIsSearchPressed(state, action: PayloadAction<string>) {
      state.valueInSearch = action.payload;
    },
  },
  extraReducers: {},
});

export type FilterActionsStrings =
  | "setEndpoint"
  | "setCountry"
  | "setCategory"
  | "setSources"
  | "setSortBy"
  | "setLanguage"
  | "setDates"
  | "setCountryName"
  | "setIsSearchPressed";

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;
