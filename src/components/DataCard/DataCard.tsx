import { type } from "os";
import React from "react";
import { TailSpin } from  'react-loader-spinner'
import {
  DataCardContainer,
  DataCardHeader,
  BottomLineStyle,
  DataContent,
  dataContentStyle,
  chartImgStyle,
  Loading,
  NoDataCase
} from "./DataCard-style";
import chartImg from "../../assets/Icons/chart.svg";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";
import Articles from "../../mockData/mockData.json";
import { RootState, useAppSelector } from "../../store/store";
import { stat } from "fs";
import { Endpoint } from "../../store/Utils/storeConstances";

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
  const articles = useAppSelector((state) => state.apiArticlesResponse.articles);
  const isLoading = useAppSelector((state) => state.apiArticlesResponse.isLoading);
  const filtersState = useAppSelector((state: RootState) => state.filters);

  //move to PieGraph and LineGraph?
  const rendeNoDataCase = () => {
    return (
      <NoDataCase>
        <img src={chartImg} style={{ ...chartImgStyle }} />
        <div style={{ ...dataContentStyle }}>No data to display</div>
      </NoDataCase>
    );
  };
  const renderLoader = () => {
    return (<Loading>
        <TailSpin
        height="50"
        width="50"
        color='grey'
        ariaLabel='loading'
      />
      <text style={{fontFamily:'Mulidh', fontSize:'1.2rem'}}>Loading...</text>
      </Loading>
    );
  };

  const returnGraphsOrNoDataCase = () => {
    if (filtersState.Endpoint == Endpoint.Everything && filtersState.valueInSearch === "")  return rendeNoDataCase();
    if (isLoading ) return renderLoader();
    if (!articles || articles.length === 0 ) return rendeNoDataCase();

    switch (type) {
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
