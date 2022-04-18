import React from "react";

export const API_KEY = "&apiKey=7bbfbb31ef804474a7a47e2accd310ac";

export const EVERYTHING_URL = "https://newsapi.org/v2/everything?q=keyword";
export const TOP_HEADLINES_URL = "https://newsapi.org/v2/top-headlines";

export const COUNTRY= "Country";
export const CATEGORY= "Category";
export const SOURCES= "Sources";
export const SORTBY= "SortBy";
export const DATES= "Dates"; 
export const LANGUAGE= "Language";
export const ENDPOINT= "Endpoint";
export enum Endpoint {
    Everything = "Everything",
    TopHeadlines = "Top Headlines"
}