import { type } from "os";
import React from "react";
import {  DataCardContainer,  DataCardHeader,  BottomLineStyle,  DataContent,  dataContentStyle,  chartImgStyle,} from "./DataCard-style";
import chartImg from "../../assets/Icons/chart.svg";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";

type IDataCard = {
  title: string;
  type: string;
};

enum types {
  Source = "Source",
  Dates = "Dates",
}

const DataCard = (props: IDataCard) => {
  const { title, type } = props;

  const rendeNoDataCase = () => {
    return (
      <DataContent>
        <img src={chartImg} style={{ ...chartImgStyle }} />
        <div style={{ ...dataContentStyle }}>No data to display</div>
      </DataContent>
    );
  };

  const returnGraphsOrNoDataCase = () => {
    switch (type){
      case types.Source:
        return <PieGraph />;
      case types.Dates:
        return <LineGraph />;
      default:
        return rendeNoDataCase();
    }
  };

  return (
    <DataCardContainer>
      <DataCardHeader>
        {title}
        <BottomLineStyle />
      </DataCardHeader>
      {returnGraphsOrNoDataCase()}
    </DataCardContainer>
  );
};

export default DataCard;
