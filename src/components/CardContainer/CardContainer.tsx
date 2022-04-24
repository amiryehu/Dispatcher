import React, { useEffect } from "react";
import Card from "../Card/Card";
import { CardContainerStyle } from "./CardContainer-style";
import { ICard } from "../../Utils/Types";
import { API_KEY, COUNTRY, Endpoint, ENDPOINT } from "../../store/Utils/storeConstances";
import { fetchFromApi } from "../../store/Utils/index";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import {
  EVERYTHING_URL,
  TOP_HEADLINES_URL,
} from "../../store/Utils/storeConstances";
import { filtersActions } from "../../store/reducers/filterReducer";

const CardContainer = () => {
  let url = "";
  const dispatch = useAppDispatch();
  const filtersState = useAppSelector((state: RootState) => state.filters);
  const articles = useAppSelector((state: RootState) => state.apiArticlesResponse.articles);



  useEffect(() => {
    fetch('https://ipapi.co/json/')
    .then( res => res.json())
    .then(response => {
      if(filtersState.Endpoint === Endpoint.TopHeadlines){
        const countryName = response.country_name;
        const currentLocation = response.country_code.toLowerCase();

        dispatch(filtersActions.setCountry(currentLocation));
        dispatch(filtersActions.setCountryName(countryName));
      }
    })
    .catch((data) => {
      console.log('Request failed:', data);
    });
  },[filtersState.Endpoint])



  useEffect(() => {
    if (filtersState.Endpoint === Endpoint.TopHeadlines) {
      url = `${TOP_HEADLINES_URL}?sources=${filtersState.Sources}&country=${filtersState.Country}&category=${filtersState.Category}&apiKey=${API_KEY}`;
    } else {
      url = `${EVERYTHING_URL}?q=${filtersState.valueInSearch}&sortBy=${filtersState.SortBy}&language=${filtersState.Language}&apiKey=${API_KEY}`;
    }
    dispatch(fetchFromApi(url));
  }, [
    filtersState.Endpoint,
    filtersState.Category,
    filtersState.Country,
    filtersState.Sources,
    filtersState.Language,
    filtersState.SortBy,
    filtersState.valueInSearch
  ]);

  const presentArticles = () => {
    return articles.map((article: ICard, index: number) => {
      return <Card article={article} key={index} />;
    });
  };

  return <CardContainerStyle>{presentArticles()}</CardContainerStyle>;
};

export default CardContainer;
