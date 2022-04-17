import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchFromApi = createAsyncThunk("fetchFromApi", async (url: string) =>{
    const res = await axios.get(url)
    if (res.status) {
       return res.data
    }
    return console.log('need to return "NO DATA" page. ')
});