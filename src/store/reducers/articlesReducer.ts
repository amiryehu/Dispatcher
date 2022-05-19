import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIresponse } from "../../Utils/Types";
import {fetchFromApi, fetchFromApiScroll} from "../Utils/index";

const initialArticles: APIresponse = { articles: [], status: "", totalResults: 0 ,currentPage:1, isLoading:false};


const articlesSlice = createSlice({
  name: "articles",
  initialState: initialArticles,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number | any>) {
      state.currentPage = state.currentPage + 1;
    },
    setClearArticles(state) {
      state.articles = [];
      state.currentPage = 1;
    },
    setIsLoading(state, action: PayloadAction<number | any>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [fetchFromApi.pending.type]: (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    },
    [fetchFromApi.fulfilled.type]: (
      state,
      action: PayloadAction<APIresponse>
    ) => {
      state.status = action.payload.status;
      state.articles = action.payload.articles;
      state.totalResults = action.payload.totalResults;
      state.isLoading = false;
    },
    [fetchFromApi.rejected.type]: (state, action) => {
      state = initialArticles;
      state.isLoading = false;
    },


    ///////////
    [fetchFromApiScroll.pending.type]: (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    },
    [fetchFromApiScroll.fulfilled.type]: (
      state,
      action: PayloadAction<APIresponse>
    ) => {
      state.status = action.payload.status;
      const union = [...Array.from(new Set([...state.articles, ...action.payload.articles])),];
      state.articles = union;
      state.totalResults = action.payload.totalResults;
      state.isLoading = false;
    },
    [fetchFromApiScroll.rejected.type]: (state, action) => {
      state = initialArticles;
      state.isLoading = false;
    },
  },
});
export const articlesActions = articlesSlice.actions;
export default articlesSlice.reducer;






// [fetchFromApi.pending.type]: (state, action) => {
//   state.status = "loading";
// },
// [fetchFromApi.fulfilled.type]: (
//   state,
//   action: PayloadAction<APIresponse>
// ) => {
//   state.status = action.payload.status;
//   if(state.currentPage !== 1){
//     const union = [
//       ...Array.from(new Set([...state.articles, ...action.payload.articles])),
//     ];
//     state.articles = union;
//   } else {
//     state.articles = action.payload.articles;
//   }
//   state.totalResults = action.payload.totalResults;
// },
// [fetchFromApi.rejected.type]: (state, action) => {
//   state = initialArticles;
// },