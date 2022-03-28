import React from "react";
import Card from "../Card/Card";
import data from "../../mockData/mockData.json";

const CardContainer = () => {
  const articles = data.articles;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {articles.map((el) => {
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
      })}
    </div>
  );
};

export default CardContainer;
