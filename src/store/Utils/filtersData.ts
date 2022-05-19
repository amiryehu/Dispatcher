import { type } from "os";
import React from "react";
import { store } from "../store";

export const Countries = {
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgium: "be",
  Brazil: "be",
  Bulgaria: "bg",
  Canada: "ca",
  China: "cn",
  Colombia: "co",
  Cuba: "cu",
  'Czech Republic': "cz",
  Egypt: "eg",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  'Hong Kong': "hk",
  Hungary: "hu",
  India: "in",
  Indonesia: "id",
  Ireland: "ie",
  Israel: "il",
  Italy: "it",
  Japan: "jp",
  Latvia: "lv",
  Lithuania: "lt",
  Malaysia: "my",
  Mexico: "mx",
  Morocco: "ma",
  Netherlands: "nl",
  'New Zealand': "nz",
  Nigeria: "ng",
  Norway: "no",
  Philippines: "ph",
  Poland: "pl",
  Portugal: "pt",
  Romania: "ro",
  Russia: "ru",
  'Saudi Arabia': "sa",
  Serbia: "rs",
  Singapore: "sg",
  Slovakia: "sk",
  Slovenia: "si",
  'South Africa': "za",
  'South Korea': "kr",
  Sweden: "se",
  Switzerland: "ch",
  Taiwan: "tw",
  Thailand: "th",
  Turkey: "tr",
  UAE: "ae",
  Ukraine: "ua",
  'United Kingdom': "gb",
  'United States': "us",
  Venuzuela: "ve",
};
export type CountriesOptions = "Argentina"| "Australia"| "Austria"| "Belgium"| "Brazil"| "Bulgaria"| "Canada"| "China"| "Colombia"| "Cuba"| "Czech Republic"| "Egypt"| "France"| 
                                "Germany"| "Greece"| "Hong Kong"| "Hungary"| "India"| "Indonesia"| "Ireland"| "Israel"| "Italy"| "Japan"| "Latvia"| "Lithuania"| "Malaysia"| "Mexico"| 
                                "Morocco"| "Netherlands"| "New Zealand"| "Nigeria"| "Norway"| "Philippines"| "Poland"| "Portugal"| "Romania"| "Russia"| "Saudi Arabia"| "Serbia"| 
                                "Singapore"| "Slovakia"| "Slovenia"| "South Africa"| "South Korea"| "Sweden"| "Switzerland"| "Taiwan"| "Thailand"| "Turkey"| "UAE"| "Ukraine"| 
                                "United Kingdom"| "United States"| "Venuzuela"; 
                                
export const Languages = {
  Amharic: "ar",
  German: "de",
  English: "en",
  Spanish: "es",
  French: "fr",
  Hebrew: "he",
  Italian: "it",
  Dutch: "nl",
  Norwegian: "no",
  Portuguese: "pt",
  Russian: "ru",
  Swedish: "se",
  Chinese: "zh",
};
export type LanguagesOptions = "Amharic"| "German"| "English"| "Spanish"| "French"| "Hebrew"| "Italian"| "Dutch"| "Norwegian"| "Portuguese"| "Russian"| "Swedish"| "Chinese";

export const Category = {
  Busines: "busines",
  Entertainment: "entertainment",
  General: "general",
  Health: "health",
  Science: "science",
  Sports: "sports",
  Technology: "technology",
};
export type CategoriesOptions = "Busines"| "Entertainment"| "General"| "Health"| "Science"| "Sports"| "Technology";

export const Sources = {
    'ABC News (AU)': "abc-news-au",
    'ABC News': "abc-news",
    'Ars Technica': "ars-technica",
    Engadget: "Engadget",
    Entrepreneur: "Entrepreneur",
    'Financial Post': "financial-post",
    MacRumors: "MacRumors",
    MarketBeat: "MarketBeat",
    'New York Magazine': "new-york-magazine",
    Reuters: "Reuters",
    'Reddit': "reddit-r-all",
    TechCrunch: "TechCrunch",
    'TechRadar': "techradar",
    'The Hill': "the-hill",
    Wired: "Wired",
};
export type SourcesOptions = "ABC News (AU)"| "ABC News"| "Ars Technica"| "Engadget"| "Entrepreneur"| "Financial Post"| "MacRumors"| "MarketBeat"| 
                             "New York Magazine"| "Reuters"| "Reddit"| "TechRadar"| "TechCrunch"| "The Hill"| "Wired";

export const SortBy = {
  Relevancy: "relevancy",
  Popularity: "popularity",
  PublishedAt: "publishedAt",
};
export type SortByOptions = "Relevancy" | "Popularity"| "PublishedAt";

export type EndpointsOptions = "Everything" | "Top Headlines" | "";

export type  TitlesOptions = "Category" | "Country" | "Sources" | "SortBy" | "Language" | "Endpoint";

export type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December" ;