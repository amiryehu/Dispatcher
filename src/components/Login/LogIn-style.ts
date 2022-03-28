import styled from "styled-components";
import { colors } from "../../Utils/Constances";

export const LogInPage = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
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
  width: 72%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.lightGray};
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
`;

export const WelcomeTitle = styled.div`
  color: ${colors.darkGray};
  font-size: 2em;
  font-weight: 300;
`;

export const WelcomeMessage = styled.div`
  color: ${colors.darkGray};
  font-size: 1.6em;
  font-weight: 100;
`;