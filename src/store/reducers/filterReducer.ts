import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

const initialState = {
  Country:"",
  Category:"",
  Sources:"",
  SortBy:"",
  Dates:"",     //from - to? ["Date" , "Date"]
  Language:"",
  Endpoint:"Top Headlines"
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
      setEndpoint: (state, action:PayloadAction<string>) => {
        state.Endpoint = action.payload;
      },
      setCountry: (state, action:PayloadAction<string>) => {
        state.Country = action.payload;
      },
      setCategory: (state, action:PayloadAction<string>) => {
        state.Category = action.payload;
      },
      setSources: (state, action:PayloadAction<string>) => {
        state.Sources = action.payload;
      },
      setSortBy: (state, action:PayloadAction<string>) => {
        state.SortBy = action.payload;
      },
      setDates: (state, action:PayloadAction<string>) => {
        state.Dates = action.payload;
      },
      setLanguage: (state, action:PayloadAction<string>) => {
        state.Language = action.payload;
      },
    },
    extraReducers:{

    }
  })

  export const filtersActions = filtersSlice.actions;
  export default filtersSlice.reducer;