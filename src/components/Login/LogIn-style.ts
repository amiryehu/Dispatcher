import styled from "styled-components";
import { colors } from "../../Utils/Constances";
import { screenSize } from "../../Utils/Constances";

export const LogInPage = styled.div`
  width: 100% ;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  @media screen and (max-width: ${screenSize.tablet}) {
    flex-direction: column;
  }

`;

export const LogoComponent = styled.div`
  width: 28%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkBlue};
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 100%;
    height: 31vh;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: ${screenSize.tablet}) {
    height: 205px;
    width: 350px;
  }
`;

export const WelcomeComponent = styled.div`
  width: 72%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.lightGray};
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 100%;
    height: 69vh;
    justify-content: center;
  }
`;

export const WelcomeWrapper = styled.div`
  width: 39%;
  height: 13rem;
  margin-left: 5rem;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  @media screen and (max-width: ${screenSize.tablet}) {
    width: 90%;
    height: 69vh;
    margin-left: 2.3rem;
    gap: 31rem;
  }
`;

export const WelcomeTitle = styled.div`
  color: ${colors.darkGray};
  font-size: 2em;
  font-weight: 300;
  @media screen and (max-width: ${screenSize.tablet}) {
    display: flex;
    justify-content: center;
    padding-top: 120px;
    padding-bottom: 20px;
  }
`;

export const WelcomeMessage = styled.div`
  color: ${colors.darkGray};
  font-size: 1.6em;
  font-weight: 100;
  @media screen and (max-width: ${screenSize.tablet}) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;