import React from "react";
import { MainContentContainer, AllBody, HeaderMain } from "./MainContent-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";
import FilterBar from "../FilterBar/FilterBar";

const Body = () => {
  return (
    <AllBody>
      <HeaderMain>
        <FilterBar />
      </HeaderMain>
      
      <MainContentContainer>
        <CardContainer />
        <DataContainer />
      </MainContentContainer>
    </AllBody>
  );
};

export default Body;
