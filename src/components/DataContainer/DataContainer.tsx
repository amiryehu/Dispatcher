import React from "react";
import DataCard from "../DataCard/DataCard";
import { DataCardContainer } from "../DataContainer/DataContainer-style";

enum DataCardType {
  Source = "Source",
  Dates = "Dates",
  Other = "",
}

enum Titles {
  Source = "Source",
  Dates = "Dates",
  Other = "Temp",
}

const DataContainer = () => {
  return (
    <DataCardContainer>
      <DataCard title={Titles.Source} type={DataCardType.Source}/>
      <DataCard title={Titles.Dates} type={DataCardType.Dates}/>
      {/* <DataCard title={Titles.Other} type={DataCardType.Other}/> */}
    </DataCardContainer>
  );
};

export default DataContainer;
