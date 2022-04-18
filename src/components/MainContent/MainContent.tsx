import React from "react";
import { MainContentContainer, AllBody, HeaderMain, TotalResults } from "./MainContent-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";
import FilterBar from "../FilterBar/FilterBar";
import { useAppSelector } from "../../store/store";

const Body = () => {
  const totalResults = useAppSelector(state => state.apiArticlesResponse.totalResults);
  const displayTotalResults = () => {
    return `${totalResults} Total results`
  }
  return (
    <AllBody>
      <HeaderMain>
        <FilterBar />
        <TotalResults>{displayTotalResults()}</TotalResults>
      </HeaderMain>
      
      <MainContentContainer>
        <CardContainer />
        <DataContainer />
      </MainContentContainer>
    </AllBody>
  );
};

export default Body;