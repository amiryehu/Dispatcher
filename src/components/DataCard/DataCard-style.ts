import styled from "styled-components";
import { escapeLeadingUnderscores } from "typescript";
import { colors, cardrRadius, cardShadow } from "../../Utils/Constances";

export const DataCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* min-width: 23vw; */
  min-height: 47vh;
  height: 20vh;
  padding: 1vh;
  border: solid ${colors.gray} 1px;
  font-size: 1.5rem;
  border-radius: ${cardrRadius};
  background: ${colors.white};
  font-family: "Roboto";
  box-shadow: ${cardShadow};
  `;

export const DataCardHeader = styled.div`
  font-weight: 700;
  color: ${colors.black};
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 0.2vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 9px;
`;

export const OnlyPie = styled.div`
  display: flex;
  height: 24vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: scroll;
`;

export const OnlyItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: scroll;
`;

export const PieItems = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  /* gap: 5px; */
`

export const DataContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* font-weight: 100; */
  gap: 25px;
  `;

export const NoDataCase = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* font-weight: 100; */
padding-top: 20%;
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

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 40%;
`
