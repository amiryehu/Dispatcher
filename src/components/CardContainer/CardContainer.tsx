import React, { useEffect } from "react";
import Card from "../Card/Card";
import data from "../../mockData/mockData.json";
import { CardContainerStyle } from "./CardContainer-style";
import { ICard } from "../../Utils/Types";
import { APIkey1 } from "../../Utils/Constances";
import { fetchFromApi } from "../../store/reducers/articlesReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";


const CardContainer = () => {

  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchFromApi(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${APIkey1}`));
  },[])
  
  const articles = useAppSelector(state => state.apiResponse.articles);

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