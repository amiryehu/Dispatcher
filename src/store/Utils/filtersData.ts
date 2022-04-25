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
  Czech_Republic: "cz",
  Egypt: "eg",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  Hong_Kong: "hk",
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
  New_Zealand: "nz",
  Nigeria: "ng",
  Norway: "no",
  Philippines: "ph",
  Poland: "pl",
  Portugal: "pt",
  Romania: "ro",
  Russia: "ru",
  Saudi_Arabia: "sa",
  Serbia: "rs",
  Singapore: "sg",
  Slovakia: "sk",
  Slovenia: "si",
  South_Africa: "za",
  South_Korea: "kr",
  Sweden: "se",
  Switzerland: "ch",
  Taiwan: "tw",
  Thailand: "th",
  Turkey: "tr",
  UAE: "ae",
  Ukraine: "ua",
  United_Kingdom: "gb",
  United_States: "us",
  Venuzuela: "ve",
};
export type CountriesOptions = "Argentina"| "Australia"| "Austria"| "Belgium"| "Brazil"| "Bulgaria"| "Canada"| "China"| "Colombia"| "Cuba"| "Czech_Republic"| "Egypt"| "France"| 
                                "Germany"| "Greece"| "Hong_Kong"| "Hungary"| "India"| "Indonesia"| "Ireland"| "Israel"| "Italy"| "Japan"| "Latvia"| "Lithuania"| "Malaysia"| "Mexico"| 
                                "Morocco"| "Netherlands"| "New_Zealand"| "Nigeria"| "Norway"| "Philippines"| "Poland"| "Portugal"| "Romania"| "Russia"| "Saudi_Arabia"| "Serbia"| 
                                "Singapore"| "Slovakia"| "Slovenia"| "South_Africa"| "South_Korea"| "Sweden"| "Switzerland"| "Taiwan"| "Thailand"| "Turkey"| "UAE"| "Ukraine"| 
                                "United_Kingdom"| "United_States"| "Venuzuela"; 
                                
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
    Android_Central: "Android Central",
    Ars_Technica: "Ars Technica",
    Business_Insider: "Business Insider",
    Engadget: "Engadget",
    Entrepreneur: "Entrepreneur",
    Gizmodo_com: "Gizmodo.com",
    MacRumors: "MacRumors",
    MarketBeat: "MarketBeat",
    New_York_Times: "New York Times",
    Reuters: "Reuters",
    Slashdot_org: "Slashdot.org",
    TechCrunch: "TechCrunch",
    The_Guardian: "The Guardian",
    The_Next_Web: "The Next Web",
    The_Verge: "The Verge",
    Wired: "Wired",
};
export type SourcesOptions = "Android_Central"| "Ars_Technica"| "Business_Insider"| "Engadget"| "Entrepreneur"| "Gizmodo_com"| "MacRumors"| "MarketBeat"| 
                             "New_York_Times"| "Reuters"| "Slashdot_org"| "TechCrunch"| "The_Guardian"| "The_Next_Web"| "The_Verge"| "Wired";

export const SortBy = {
  Relevancy: "relevancy",
  Popularity: "popularity",
  PublishedAt: "publishedAt",
};
export type SortByOptions = "Relevancy" | "Popularity"| "PublishedAt";

export type EndpointsOptions = "Everything" | "Top Headlines" | "";

export type  TitlesOptions = "Category" | "Country" | "Sources" | "SortBy" | "Language" | "Endpoint";