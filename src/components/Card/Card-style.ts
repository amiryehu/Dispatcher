import styled from "styled-components";
import { colors, cardrRadius, screenSize } from "../../Utils/Constances";

export const CardWrapper = styled.div`/////////////////////
  display: flex;
  width: 98%;
  height: 30vh;
  border: solid ${colors.gray} 1px;
  border-radius: ${cardrRadius};
  background: ${colors.white};
  align-items: center;
  font-style: "normal";
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 100%;
    transition-duration: 500ms;
  }
`;

export const CardImg = styled.img`
  height: 100%;
  width: 24.7%;
  min-width: 16vw;
  object-fit: cover;
  object-position: 25% 0%;
  border-radius: ${cardrRadius} 0px 0px ${cardrRadius};
`;

export const CardContent = styled.div`
    height: 28vh;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2%;
    margin-bottom: 0.6%;
    gap: 3px;
`;

export const ArticleHeader = styled.div`
  display: flex;
  height: 1.2em;
  justify-content: space-between;
  padding-top: 1.2em;
  padding-right: 2%;
  color: rgba(90, 90, 137, 0.5);
`;

export const ArticleBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 95.3%;
  padding-top: 1.8em;
  /* gap: 8px; */
  height: 20vh;
`;

export const ArticleContent = styled.div`
  margin-top: 2%;
  font-family: "Roboto";
  height: 4vh;
  &.title {
    color: ${colors.black};
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &.name {
    color: rgba(90, 90, 137, 0.5);
    font-size: 0.83rem;
    font-weight: 400;
  }

  &.description {
    color: ${colors.darkGray};
    font-size: 0.83rem;
    height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const ButtonContainer = styled.div`
    margin-left: auto;
    margin-right: 0.7em;
    /* margin-top: 4px; */
    margin-bottom: 0.5em;
`;

export const Tags = styled.div`
  color: ${colors.darkGray};
  background: ${colors.lightGray};
  height: 1em;
  padding: 2px 8px;
  border-radius: ${cardrRadius};
  display: flex;
  align-items: center;
`;