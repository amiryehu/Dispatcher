import React from "react";
import Button from "../Button/Button";
import { buttonType } from "../../Utils/Constances";
import {  CardWrapper,  CardImg,  ArticleHeader,  Tags,  ArticleBody,  ArticleContent,  CardContent, ButtonContainer} from "./Card-style";
import { formattingDate } from "../../Utils/DateConvert";

type ICard = {
  name: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};

const btnText = "NAVIGATE TO DISPATCH";

const Card = (props: ICard) => {

  const {urlToImage, publishedAt, title, name, description /*tags?*/} = props;
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
          <Button className={buttonType.primary} btnText={btnText}></Button>
        </ButtonContainer>
      </CardContent>

    </CardWrapper>
  );
};

export default Card;
