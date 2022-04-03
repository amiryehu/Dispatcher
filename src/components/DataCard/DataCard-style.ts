import styled from "styled-components";
import { colors, cardrRadius, cardShadow } from "../../Utils/Constances";

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
  height: 40vh;
  border: solid ${colors.gray} 1px;
  font-size: 1.5rem;
  border-radius: ${cardrRadius};
  background: ${colors.white};
  font-family: "Roboto";
  font-weight: 700;
  box-shadow: ${cardShadow};
`;

export const DataCardHeader = styled.div`
  color: ${colors.black};
  margin-top: 15px;
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 9px;
`;

export const DataContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

export const dataContentStyle = {
  color: `${colors.darkGray}`,
  fontSize: "1.25rem",
  fontWeight: 400,
}

export const chartImgStyle = {
  height: "133px", 
  width: "133px" 
}

export const BottomLineStyle = styled.div`
  width: 7%;
  border-bottom: solid 4px ${colors.darkGray};
  border-radius: 20px;
`;