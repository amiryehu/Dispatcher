import React from "react";
import { MainContentContainer, AllBody, HeaderMain, TotalResults, TopHeadlinesTitle } from "./MainContent-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";
import FilterBar from "../FilterBar/FilterBar";
import { useAppSelector } from "../../store/store";
import { Endpoint } from "../../store/Utils/storeConstances";

const Body = () => {
  const totalResults = useAppSelector(state => state.apiArticlesResponse.totalResults);
  const storeEndPoint = useAppSelector((state) => state.filters.Endpoint);
  const countryName = useAppSelector((state) => state.filters.countryName)

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