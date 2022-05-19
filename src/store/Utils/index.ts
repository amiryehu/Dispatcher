import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useAppDispatch } from "../store";
import { articlesActions } from "../../store/reducers/articlesReducer";




const useFetchFromApiErrorHandler = () => {
  const dispatch = useAppDispatch();
  dispatch(articlesActions.setIsLoading(false));
  return console.log("return no data page");
};

export const fetchFromApi = createAsyncThunk(
  "fetchFromApi",
  async (url: string) => {
    try {
      const res = await axios.get(url);
      if (res.status) {
        return res.data;
      }
    } catch (err) {
      useFetchFromApiErrorHandler();
    }
  }
);

export const fetchFromApiScroll = createAsyncThunk(
  "fetchFromApiScroll",
  async (url: string) => {
    try {
      const res = await axios.get(url);
      if (res.status) {
        return res.data;
      }
    } catch (err) {
      useFetchFromApiErrorHandler();
    }
  }
);