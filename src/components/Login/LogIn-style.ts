import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const LogInPage = styled.div`
    display: flex;
    flex-direction: row;
`;

export const LogoComponent = styled.div`
    width: 28%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.darkBlue};
`;


export const WelcomeComponent = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    width: 72%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${colors.gray};
`;
    
    
export const WelcomeTitle = styled.div`
    color: ${colors.darkGray};
    font-size: 6vh;
`;

export const WelcomeMessage = styled.div`
    color: ${colors.darkGray};
    font-size: 4vh;
`;