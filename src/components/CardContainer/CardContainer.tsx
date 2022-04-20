import React, { useEffect } from "react";
import Card from "../Card/Card";
import { CardContainerStyle } from "./CardContainer-style";
import { ICard } from "../../Utils/Types";
import { API_KEY } from "../../store/Utils/storeConstances"
import { fetchFromApi } from "../../store/Utils/index";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EVERYTHING_URL, TOP_HEADLINES_URL } from "../../store/Utils/storeConstances"


const CardContainer = () => {
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchFromApi(EVERYTHING_URL + API_KEY));
  },[])

  const endPoint = EVERYTHING_URL;
  dispatch(() => endPoint);

  const articles = useAppSelector(state => state.apiArticlesResponse.articles);

  const presentArticles = () => {
    return articles.map((article: ICard, index:number) => {
      return (
        <Card article={article} key={index}/>
      );
    });
  };

  return <CardContainerStyle>
          {presentArticles()}
         </CardContainerStyle>;
};

export default CardContainer;