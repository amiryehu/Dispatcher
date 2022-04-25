import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    background-color: ${colors.darkBlue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`;

export const SearchAndRecentSearches = styled.div`
    display: flex;
    position: absolute;
    margin-left: 8%;
    flex-direction: column;
`;

export const RightSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 15px;
`;

export const logoStyle = {
    width: "110px", 
    height: "110px"
}