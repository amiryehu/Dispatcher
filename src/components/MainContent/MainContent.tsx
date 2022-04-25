import React, { useEffect } from "react";
import { MainContentContainer, AllBody, HeaderMain, TotalResults, TopHeadlinesTitle } from "./MainContent-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";
import FilterBar from "../FilterBar/FilterBar";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { Endpoint } from "../../store/Utils/storeConstances";
import { filtersActions } from "../../store/reducers/filterReducer";


const Body = () => {
  const totalResults = useAppSelector(state => state.apiArticlesResponse.totalResults);
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);
  const countryName = useAppSelector((state) => state.filters.countryName)

  const dispatch = useAppDispatch();
  const filtersState = useAppSelector((state: RootState) => state.filters);
  
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


  const renderTotalResultsOrTopHeadlines = () => {
    return (
      <div>
        {storeEndPoint == Endpoint.TopHeadlines && (
          <TopHeadlinesTitle>{`Top Headlines in ${countryName}`}</TopHeadlinesTitle>
        )}
        {(storeEndPoint == Endpoint.Everything) && (
          <TotalResults>{`${totalResults} Total results`}</TotalResults>
        )}
      </div>
    );
  }

  return (
    <AllBody>
      <HeaderMain>
        <FilterBar />
        {renderTotalResultsOrTopHeadlines()}
      </HeaderMain>
      
      <MainContentContainer>
        <CardContainer />
        <DataContainer />
      </MainContentContainer>
    </AllBody>
  );
};

export default Body;