import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  Country:"amir",
  Category:"",
  Sources:"",
  SortBy:"",
  Dates:"",     //from - to?
  Language:"",
  Endpoint:""
}


const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {

    },
    extraReducers:{}
  })
  export const articlesActions = filtersSlice.actions;
  export default filtersSlice.reducer;