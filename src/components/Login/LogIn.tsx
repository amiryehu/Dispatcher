import React from "react";
import Button from "../Button/Button";
import {  LogInPage,  LogoComponent,  WelcomeComponent,  WelcomeWrapper,  WelcomeTitle,  WelcomeMessage, LogoWrapper,} from "./LogIn-style";
import { ReactComponent as LogInLogo } from "../../assets/Icons/logo.svg";
import "../../assets/Icons/logo.svg";
import { buttonType } from "../../Utils/Constances";
import {SeparatingLine} from '../../Utils/Constances';

const LogIn = () => {
  return (
    <LogInPage>
      <LogoComponent>
        <LogoWrapper>
          <LogInLogo />
        </LogoWrapper>
      </LogoComponent>
      <WelcomeComponent>
        <WelcomeWrapper>
          <div>
            <WelcomeTitle>Welcome to Dispatcher</WelcomeTitle>
            <WelcomeMessage>
              Locate articles and breaking news headlines from news sources and
              blogs across the web
            </WelcomeMessage>
          </div>
          <div>
            <SeparatingLine/>
            <Button className={buttonType.logInButton} btnText="CONTINUE"></Button>
          </div>
        </WelcomeWrapper>
      </WelcomeComponent>
    </LogInPage>
  );
};
export default LogIn;
