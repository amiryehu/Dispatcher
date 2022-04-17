import React, { useEffect } from "react";
import Card from "../Card/Card";
import { CardContainerStyle } from "./CardContainer-style";
import { ICard } from "../../Utils/Types";
import { API_KEY } from "../../store/Utils/storeConstances"
import { fetchFromApi } from "../../store/Utils/index";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EVERYTHING_STRING, TOP_HEADLINES_STRING } from "../../store/Utils/storeConstances"

const CardContainer = () => {

  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchFromApi(EVERYTHING_STRING + API_KEY));
  },[])
  
  const articles = useAppSelector(state => state.apiResponse.articles);

  const presentArticles = () => {
    return articles.map((article: ICard) => {
      return (
        <Card article={article} />
      );
    });
  };

  return <CardContainerStyle>
          {presentArticles()}
         </CardContainerStyle>;
};

export default CardContainer;