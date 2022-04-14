import React, { useEffect } from "react";
import Card from "../Card/Card";
import data from "../../mockData/mockData.json";
import { CardContainerStyle } from "./CardContainer-style";
import { APIresponse, ICard } from "../../Utils/Types";
import { APIkey1 } from "../../Utils/Constances";
import { fetchFromApi } from "../../store/reducers/articlesReducer";
import { Console } from "console";
import { useAppDispatch } from "../../store/reducers/articlesReducer";


const CardContainer = () => {
  
  // useEffect(()=>{
  //   const useAppDispatch: APIresponse = (fetchFromApi(`https://newsapi.org/v2/everything?q=Apple&apiKey=${APIkey1}`));

  // },[])
  
  // const apiRes:APIresponse = ;
  // const articles1:ICard[] = apiRes.articles;
  // console.log(articles1);

  const articles:ICard[] = data.articles as ICard[]; // useSelector

  const presentArticles = () => {
    return articles.map((el: ICard) => {
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