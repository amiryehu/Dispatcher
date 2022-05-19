import React from "react";
import Button from "../Button/Button";
import { buttonType } from "../../Utils/Constances";
import {  CardWrapper,  CardImg,  ArticleHeader,  Tags,  ArticleBody,  ArticleContent,  CardContent, ButtonContainer} from "./Card-style";
import { formattingDate } from "../../Utils/DateConvert";
import { ICard } from "../../Utils/Types";
import { store } from "../../store/store";
import noImage from "../../assets/Icons/noImage.jpg"


interface Icard{
  article:ICard;
}

const btnText = "NAVIGATE TO DISPATCH";

const Card = ({article}:Icard) => {
  
  const {urlToImage, publishedAt, title, source, description, author, url} = article;
  const {id, name} = source;

  const openArticleInNewTab = (): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <CardWrapper>

      <CardImg src={urlToImage?urlToImage:noImage} />

      <CardContent>
        <div>
          <ArticleHeader>
            {formattingDate(publishedAt)}
            {/* <Tags>#tags</Tags> */}
          </ArticleHeader>
          <ArticleBody>
            <ArticleContent className="title">{title && title}{""}</ArticleContent>
            <ArticleContent className="name">{name && name}{""}</ArticleContent>
            <ArticleContent className="description">{description && description}{""}</ArticleContent>
          </ArticleBody>
        </div>
        <ButtonContainer>
          <Button className={buttonType.primary} btnText={btnText} onClick={openArticleInNewTab} arrowIconIsShow={true}></Button>
        </ButtonContainer>
      </CardContent>

    </CardWrapper>
  );
};

export default Card;
