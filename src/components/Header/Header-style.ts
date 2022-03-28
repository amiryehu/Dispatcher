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
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 110px;
`;

export const RightSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 15px;
`;

export const logoStyle = {
    width: "110px", 
    height: "110px"
}