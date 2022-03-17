import styled from "styled-components";
import { colors, cardrRadius, articleTextColors } from "../../Utils/Constances";

export const CardWrapper = styled.div`
  display: flex;
  width: 51%;
  height: 242px;
  border-radius: ${cardrRadius};
  background: ${colors.white};
  align-items: center;
  font-style: "normal";
`;

export const CardImg = styled.img`
  height: 100%;
  width: 24.7%;
  border-radius: ${cardrRadius} 0px 0px ${cardrRadius};
`;

export const CardContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2%;
`;

export const ArticleHeader = styled.div`
  display: flex;
  height: 10%;
  justify-content: space-between;
  padding-top: 1%;
  padding-right: 2%;
  color: rgba(90, 90, 137, 0.5);
`;

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 95.3%;
`;

export const ArticleContent = styled.div`
  margin-top: 3%;
  &.title {
    color: ${articleTextColors.title};
    font-size: 1.15rem;
  }

  &.name {
    color: rgba(90, 90, 137, 0.5);
    font-size: 0.85rem;
  }

  &.description {
    color: ${articleTextColors.description};
    font-size: 0.85rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 2; 
   -webkit-box-orient: vertical;
  }
`;

export const ButtonContainer = styled.div`
    margin-left: auto;
    margin-right: 2%;
    margin-bottom: 2%;
`;

export const Tags = styled.div`
  color: ${articleTextColors.tagsText};
  background: ${articleTextColors.tegsBackground};
  height: 1em;
  padding: 2px 8px;
  border-radius: ${cardrRadius};
  display: flex;
  align-items: center;
`;