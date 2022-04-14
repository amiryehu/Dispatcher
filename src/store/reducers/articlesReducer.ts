import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { APIresponse } from "../../Utils/Types";

const initialState: APIresponse = { articles: [], status: "", totalResults: 0 };

export const fetchFromApi = createAsyncThunk("fetchFromApi", (url: string) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch()
);

const articlesSlice = createSlice({
  name: "articles",
  initialState,
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
      state = initialState;
    },
  },
});
export const articlesActions = articlesSlice.actions;
export default articlesSlice.reducer;