import React from "react";
import Button from "../Button/Button";
import { LogInPage, LogoComponent, WelcomeComponent,WelcomeTitle, WelcomeMessage } from "./LogIn-style";
import { ReactComponent as LogInLogo } from "../../assets/Icons/logo.svg";
import "../../assets/Icons/logo.svg";
import { buttonType } from "../../Utils/Constances";

const LogIn = () => {
  return (
    <LogInPage>
      <LogoComponent>
        <LogInLogo />
      </LogoComponent>
      <WelcomeComponent>
        <WelcomeTitle>Welcome to Dispatcher</WelcomeTitle>
        <WelcomeMessage>Locate articles and breaking news headlines from news sources and blogs across the web</WelcomeMessage>
        <Button className={buttonType.primary} btnText="amir"></Button>{" "}
      </WelcomeComponent>
    </LogInPage>
  );
};
export default LogIn;
