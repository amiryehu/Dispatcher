import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { EVERYTHING_URL, TOP_HEADLINES_URL } from "./storeConstances";
import { store } from "../store";

const fetchFromApiErrorHandler = () => {
  return console.log("return no data page");
};

export const fetchFromApi = createAsyncThunk("fetchFromApi",  async (url: string) => {
    try {
      const res = await axios.get(url);
      if (res.status) {
        return res.data;
      }
    } catch (err) {
      fetchFromApiErrorHandler();
    }
  }
);