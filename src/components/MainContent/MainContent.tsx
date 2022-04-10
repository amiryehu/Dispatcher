import React from "react";
import { MainContentContainer } from "./MainContent-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";

const Body = () => {
  return (
    <MainContentContainer>
      <CardContainer />
      <DataContainer />
    </MainContentContainer>
  );
};

export default Body;