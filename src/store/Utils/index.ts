import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Endpoint, EVERYTHING_URL, TOP_HEADLINES_URL } from "./storeConstances";
import { RootState, store, useAppDispatch, useAppSelector } from "../store";
import { filtersActions } from "../reducers/filterReducer";

const fetchFromApiErrorHandler = () => {
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
      fetchFromApiErrorHandler();
    }
  }
);


//I tried to get the user's location from here, 
//it did not work so I put it in the component of the card container



// export const getUserLocation = createAsyncThunk("getUserLocation", async () => {
//   try {
//     const res = await axios.get("https://ipapi.co/json/");
//     if (res.status) {
//       const objLocation = await res.data;
//       return objLocation.country_code.toLowerCase();
//     }
//   } catch (err) {
//     fetchFromApiErrorHandler();
//   }
// });


// export const getUserLocation = () => {
//      fetch("https://ipapi.co/json/")
//     (res: any)=>{
//       const objLocation =   res.json();
//       return objLocation.country_code.toLowerCase();
//     }
//     fetchFromApiErrorHandler();
// };
