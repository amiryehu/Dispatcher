import React, { useEffect } from "react";
import { MainContentContainer, AllBody, HeaderMain, TotalResults, TopHeadlinesTitle } from "./MainContent-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";
import FilterBar from "../FilterBar/FilterBar";
import { RootState, useAppDispatch, useAppSelector } from "../../store/store";
import { Endpoint } from "../../store/Utils/storeConstances";
import { filtersActions } from "../../store/reducers/filterReducer";
import { Countries, CountriesOptions } from "../../store/Utils/filtersData";
import { Loading } from "../DataCard/DataCard-style";
import { TailSpin } from  'react-loader-spinner'




const Body = () => {
  const totalResults = useAppSelector(state => state.apiArticlesResponse.totalResults);
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);
  const countryName = useAppSelector((state) => state.filters.countryName);
  const country = useAppSelector((state) => state.filters.Country);

  const dispatch = useAppDispatch();
  const filtersState = useAppSelector((state: RootState) => state.filters);
  const totalResOrTopHedline = useAppSelector(state => state.filters.totalResOrTopHedline);
  const isLoading = useAppSelector((state) => state.apiArticlesResponse.isLoading);

  
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

  useEffect(()=>{
    renderTotalResultsOrTopHeadlines();
  },[countryName])



  
  const renderTotalResultsOrTopHeadlines = () => {
    console.log(totalResOrTopHedline);
    
    return (
      <div>
        {(storeEndPoint == Endpoint.TopHeadlines && totalResOrTopHedline) && (
          <TopHeadlinesTitle>{`Top Headlines in ${countryName}`}</TopHeadlinesTitle>
        )}
        {(storeEndPoint == Endpoint.TopHeadlines && !totalResOrTopHedline && filtersState.valueInSearch !== "") && (
          <TotalResults>{`${totalResults} Total results`}</TotalResults>
        )}
        {(storeEndPoint == Endpoint.TopHeadlines && !totalResOrTopHedline && filtersState.valueInSearch === "") && (
          <TotalResults>{`${totalResults} Total results`}</TotalResults>
        )}
        {(storeEndPoint == Endpoint.Everything&& filtersState.valueInSearch !== "") && (
          <TotalResults>{`${totalResults} Total results`}</TotalResults>
        )}
        {(storeEndPoint == Endpoint.Everything && filtersState.valueInSearch === "") && (
          <TotalResults><div style={{height:'60px'}}></div></TotalResults>
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