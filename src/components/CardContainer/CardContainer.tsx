import React from "react";
import Card from "../Card/Card";
import data from "../../mockData/mockData.json";
import { CardContainerStyle } from "./CardContainer-style";

const CardContainer = () => {
  const articles = data.articles;

  const presentArticles = () => {
    return articles.map((el) => {
      return (
        <Card
          name={el.source.name}
          title={el.title}
          description={el.description}
          url={el.url}
          urlToImage={el.urlToImage}
          publishedAt={el.publishedAt}
        />
      );
    });
  };

  return <CardContainerStyle>
          {presentArticles()}
         </CardContainerStyle>;
};

export default CardContainer;
