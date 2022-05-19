import styled from "styled-components";
import { colors, screenSize } from "../../Utils/Constances";
const pageWidth = '82%';

export const AllBody = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* padding-left: 2%;
    padding-right: 2%; */
    /* margin-top: 0.9vh; */
    padding-top: 10px;
`

export const HeaderMain = styled.div`
    width: ${pageWidth};
    display: flex;
    /* gap: 8px; */
    flex-direction: column;
    justify-content: center;
    /* padding-bottom: 3px; */
    padding-top: 20px;
    /* padding-bottom: 20px; */
    /* margin-bottom: 10px; */
    padding-left: 10px;
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 96%;
    transition-duration: 500ms;
  }
`

export const TotalResults = styled.div`
    width: 100%;
    /* height: 2.5vh; */
    margin-bottom: 1.5vh;
    padding-top: 15px;
    margin-top:10px;
    border-top: solid 1px ${colors.gray};
    font-weight: 400;
    color: ${colors.darkGray};
`
export const TopHeadlinesTitle = styled.div`
    width: 100%;
    /* height: 1vh; */
    font-size: 1.3em;
    /* margin-bottom: 2.5vh;
    padding-top: 1.1vh; */
    margin-top: 5px;
    padding-top: 18px;
    padding-bottom: 20px;
    border-top: solid 1px ${colors.gray};
    font-weight: 500;
    color: ${colors.darkBlue};
`

export const MainContentContainer = styled.div`
    width: ${pageWidth};
    height: 100vh;
    display: flex;
    margin-left: 10px;
    justify-content: flex-start;
  @media screen and (max-width: ${screenSize.tablet}) {
    margin-left: 5%;
    margin-right: 5%;
    width: 96%;
    transition-duration: 500ms;
  }
`;
