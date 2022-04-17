import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { APIresponse } from "../../Utils/Types";
import {fetchFromApi} from "../Utils/index"

const initialArticles: APIresponse = { articles: [], status: "", totalResults: 0 };


const articlesSlice = createSlice({
  name: "articles",
  initialState: initialArticles,
  reducers: {},
  extraReducers: {
    [fetchFromApi.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [fetchFromApi.fulfilled.type]: (
      state,
      action: PayloadAction<APIresponse>
    ) => {
      state.status = action.payload.status;
      state.articles = action.payload.articles;
      state.totalResults = action.payload.totalResults;
    },
    [fetchFromApi.rejected.type]: (state, action) => {
      state = initialArticles;
    },
  },
});
export const articlesActions = articlesSlice.actions;
export default articlesSlice.reducer;