import { type } from "os";
import React from "react";
import {
  DataCardContainer,
  DataCardHeader,
  BottomLineStyle,
  DataContent,
  dataContentStyle,
  chartImgStyle,
} from "./DataCard-style";
import chartImg from "../../assets/Icons/chart.svg";
import LineGraph from "./LineGraph";
import PieGraph from "./PieGraph";
import Articles from "../../mockData/mockData.json";
import { useAppSelector } from "../../store/store";

type IDataCard = {
  title: string,
  type: string,
};

enum types {
  Source = "Source",
  Dates = "Dates",
}

const DataCard = (props: IDataCard) => {
  const { title, type } = props;
  const articles = useAppSelector(state=>state.apiArticlesResponse.articles)
  
  // arranged data
  const a  = Articles.articles ;
  let sumOfArticles = 0;
  const sourceCounter: { [key: string]: number } = {};
  const sortedSource: { name: string; value: number }[] = [];

  for (const element of articles) {
    if (sourceCounter[element.source.name]) {
      sourceCounter[element.source.name] += 1;
    } else {
      sourceCounter[element.source.name] = 1;
    }
    sumOfArticles++;
  }

  for (const source in sourceCounter) {
    sortedSource.push({ name: source, value: sourceCounter[source] });
  }
  sortedSource.sort(function (a, b) {
    return b.value - a.value;
  });
  // end arranged data

  const rendeNoDataCase = () => {
    return (
      <DataContent>
        <img src={chartImg} style={{ ...chartImgStyle }} />
        <div style={{ ...dataContentStyle }}>No data to display</div>
      </DataContent>
    );
  };

  const returnGraphsOrNoDataCase = () => {
    if(!sortedSource || sortedSource.length === 0)
      return rendeNoDataCase()

    switch (type) {
      case types.Source:
          return <PieGraph data={sortedSource} />;   
      case types.Dates:
          return <LineGraph data={sortedSource} />; 
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
