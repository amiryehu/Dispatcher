import React from "react";
import Card from "../Card/Card";
import data from "../../mockData/mockData.json";
import { CardContainerStyle } from "./CardContainer-style";
import { ICard } from "../../Utils/Types";


const CardContainer = () => {
  const articles:ICard[] = data.articles as ICard[]; // useSelector

  const presentArticles = () => {
    return articles.map((el) => {
      return (
        <Card article={el} />
      );
    });
  };

  return <CardContainerStyle>
          {presentArticles()}
         </CardContainerStyle>;
};

export default CardContainer;
