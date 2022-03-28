import React from "react";
import { BodyContainer } from "./Body-style";
import CardContainer from "../CardContainer/CardContainer";
import DataContainer from "../DataContainer/DataContainer";

const Body = () => {
  return (
    <BodyContainer>
      <CardContainer />
      <DataContainer />
    </BodyContainer>
  );
};

export default Body;