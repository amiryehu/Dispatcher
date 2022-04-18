import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const AllBody = styled.div`
    width: 100%;
    height: 110vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;
`



export const HeaderMain = styled.div`
    width: 78%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
`

export const TotalResults = styled.div`
    width: 100%;
    height: 3vh;
    margin-bottom: 2vh;
    padding-top: 1vh;
    border-top: solid 1px ${colors.gray};
    font-weight: 400;
    color: ${colors.darkGray};
`

export const MainContentContainer = styled.div`
    width: 78%;
    height: 100vh;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    justify-content: center;
`;