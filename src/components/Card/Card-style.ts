import styled from "styled-components";
const cardrRadius = "14px";

export const CardWrapper = styled.div`
  display: flex;
  width: 51%;
  height: 242px;
  border-radius: ${cardrRadius};
  background: #ffffff;
  align-items: center;
  font-family: "Roboto";
  font-style: "normal";
`;

export const CardImg = styled.img`
  height: 100%;
  width: 24.7%;
  padding: 0px;
  border-radius: ${cardrRadius} 0px 0px ${cardrRadius};
  align-content: space-between;
`;

export const CardContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2%;

    &:last-child{
        float: right;
    }
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
  padding: 0px;
`;

export const ArticleContent = styled.div`
  margin-top: 2.5%;
  &.title {
    color: #14142b;
    font-size: 18px;
  }

  &.name {
    color: rgba(90, 90, 137, 0.5);
    font-size: 14px;
  }

  &.description {
    color: #5a5a89;
    font-size: 14px;
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
  color: #5a5a89;
  background: #f3f3ff;
  padding: 2px 8px;
  border-radius: ${cardrRadius};
  align-items: center;
`;