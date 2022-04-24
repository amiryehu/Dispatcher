import React from "react";
import Button from "../Button/Button";
import { buttonType } from "../../Utils/Constances";
import {  CardWrapper,  CardImg,  ArticleHeader,  Tags,  ArticleBody,  ArticleContent,  CardContent, ButtonContainer} from "./Card-style";
import { formattingDate } from "../../Utils/DateConvert";
import { ICard } from "../../Utils/Types";
import { store } from "../../store/store";


interface Icard{
  article:ICard;
}

const btnText = "NAVIGATE TO DISPATCH";

const Card = ({article}:Icard) => {
  
  const {urlToImage, publishedAt, title, source, description, author, url} = article;
  const {id, name} = source;

  return (
    <CardWrapper>

      <CardImg src={urlToImage} />

      <CardContent>
        <div>
          <ArticleHeader>
            {formattingDate(publishedAt)}
            <Tags>#tags</Tags>
          </ArticleHeader>
          <ArticleBody>
            <ArticleContent className="title">{title}</ArticleContent>
            <ArticleContent className="name">{name}</ArticleContent>
            <ArticleContent className="description">{description}</ArticleContent>
          </ArticleBody>
        </div>
        <ButtonContainer>
          <Button className={buttonType.primary} btnText={btnText} articleUrl={url}></Button>
        </ButtonContainer>
      </CardContent>

    </CardWrapper>
  );
};

export default Card;
